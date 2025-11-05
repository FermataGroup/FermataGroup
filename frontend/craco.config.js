// craco.config.js
const path = require("path");
require("dotenv").config();

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
  enableVisualEdits: process.env.REACT_APP_ENABLE_VISUAL_EDITS === "true",
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

// Conditionally load visual editing modules only if enabled
let babelMetadataPlugin;
let setupDevServer;

if (config.enableVisualEdits) {
  babelMetadataPlugin = require("./plugins/visual-edits/babel-metadata-plugin");
  setupDevServer = require("./plugins/visual-edits/dev-server-setup");
}

// Conditionally load health check modules only if enabled
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

const webpackConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      const appRoot = path.resolve(__dirname, '..');

      // Point entry to root-level index.js
      webpackConfig.entry = path.join(appRoot, 'index.js');

      // Ensure HtmlWebpackPlugin uses root-level index.html as template
      const htmlPlugin = webpackConfig.plugins.find(p => p.constructor && p.constructor.name === 'HtmlWebpackPlugin');
      if (htmlPlugin) {
        // CRA stores options in userOptions/options depending on version
        if (htmlPlugin.userOptions) {
          htmlPlugin.userOptions.template = path.join(appRoot, 'index.html');
        }
        if (htmlPlugin.options) {
          htmlPlugin.options.template = path.join(appRoot, 'index.html');
        }
      }

      // Allow importing files from outside src by removing ModuleScopePlugin
      if (webpackConfig.resolve && Array.isArray(webpackConfig.resolve.plugins)) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
          (p) => !(p && p.constructor && p.constructor.name === 'ModuleScopePlugin')
        );
      }

      // Include project root in babel-loader so root/index.js is transpiled
      const addIncludePath = (rule) => {
        if (!rule) return;
        const includePaths = [appRoot];
        if (Array.isArray(rule.include)) {
          rule.include = [...rule.include, ...includePaths];
        } else if (rule.include) {
          rule.include = [rule.include, ...includePaths];
        } else {
          // Some CRA rules don't set include; leave as-is
        }
      };

      if (webpackConfig.module && Array.isArray(webpackConfig.module.rules)) {
        webpackConfig.module.rules.forEach((rule) => {
          // CRA nests real rules under oneOf
          if (Array.isArray(rule.oneOf)) {
            rule.oneOf.forEach((one) => {
              // JS via babel-loader
              if (one.loader && typeof one.loader === 'string' && one.loader.includes('babel-loader')) {
                addIncludePath(one);
              }
              // CSS via style/css/postcss loaders: extend include when present
              if (one.test && one.test.toString().includes('css')) {
                addIncludePath(one);
              }
            });
          } else {
            // Fallback: top-level rule
            if (rule.loader && typeof rule.loader === 'string' && rule.loader.includes('babel-loader')) {
              addIncludePath(rule);
            }
          }
        });
      }

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });

        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }

      // Add health check plugin to webpack if enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },
};

// Only add babel plugin if visual editing is enabled
if (config.enableVisualEdits) {
  webpackConfig.babel = {
    plugins: [babelMetadataPlugin],
  };
}

// Setup dev server with visual edits and/or health check
if (config.enableVisualEdits || config.enableHealthCheck) {
  webpackConfig.devServer = (devServerConfig) => {
    // Apply visual edits dev server setup if enabled
    if (config.enableVisualEdits && setupDevServer) {
      devServerConfig = setupDevServer(devServerConfig);
    }

    // Add health check endpoints if enabled
    if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
      const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

      devServerConfig.setupMiddlewares = (middlewares, devServer) => {
        // Call original setup if exists
        if (originalSetupMiddlewares) {
          middlewares = originalSetupMiddlewares(middlewares, devServer);
        }

        // Setup health endpoints
        setupHealthEndpoints(devServer, healthPluginInstance);

        return middlewares;
      };
    }

    return devServerConfig;
  };
}

module.exports = webpackConfig;
