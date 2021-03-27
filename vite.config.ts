import { defineConfig } from "vite";
import { myPlugin } from "./vite/plugin";

console.log("CONFIG_DIR and PLUGIN_DIR should be different");
console.log("CONFIG_DIR", __dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [myPlugin()],
});
