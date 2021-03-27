import { Plugin } from "vite";

export function myPlugin(): Plugin {
  console.log("PLUGIN_DIR", __dirname);
  return {
    name: "dirname",
  };
}
