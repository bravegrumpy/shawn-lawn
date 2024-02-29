const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_be219f._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
