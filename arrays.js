const sassLoaders = [
    "file-loader?name=../css/[name].css",
    "postcss-loader",
    "sass-loader?sourceMap"
];

console.log(sassLoaders);

const out = sassLoaders.join(" --- ");

console.log(out);