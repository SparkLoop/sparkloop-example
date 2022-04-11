const esbuild = require("esbuild");


esbuild.serve({
  servedir: "public",
}, {
  entryPoints: ["src/main.js"],
  // watch: true,
  outdir: "public/js",
  bundle: true,
  define: {
    SETTINGS: JSON.stringify({campaign_id: "REPLACE_CAMPAIGN_ID"})
  }
})
.then(server => {
  console.log(`Server listening on http://localhost:${server.port}`);
  // server.stop();
})