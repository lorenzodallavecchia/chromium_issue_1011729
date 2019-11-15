const path = require("path");

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    output: {
        path: path.resolve(__dirname, "../lib"),
        devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]',
    },
};