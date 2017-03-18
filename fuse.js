const { FuseBox, SVGPlugin, CSSPlugin } = require('fuse-box');


const fuse = new FuseBox({
    homeDir: "src/",
    sourceMaps: true, 
    outFile: "dist/bundle.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin()
    ]
});

fuse.devServer("index.tsx")