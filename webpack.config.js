const path = require('path');

module.exports = {

    // Entry point that indicates where
    // the webpack should start bundling
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    // Options for resolving module requests
    // extensions that are used
    resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },

    // Output point where webpack should
    // output the bundles and assets
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
};
