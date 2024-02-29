const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_4f7e5e._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
