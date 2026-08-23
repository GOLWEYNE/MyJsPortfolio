// PostCSS configuration
// This is .cjs (not .js) because package.json sets "type": "module",
// which would otherwise make Node treat this file as an ES module and
// throw "ReferenceError: module is not defined".
//
// Plugins run top to bottom:
//  1. tailwindcss  - compiles Tailwind's utility classes into real CSS
//  2. autoprefixer - adds vendor prefixes for cross-browser support
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
};
