const mix = require("laravel-mix");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const webpackConfig = {
    plugins: [new CaseSensitivePathsPlugin()]
    // other webpack config ...
};

mix.webpackConfig(webpackConfig);

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css");
