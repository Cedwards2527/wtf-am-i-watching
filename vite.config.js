import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://github.com/Cedwards2527/wtf-am-i-watching.git
export default defineConfig({
  plugins: [react()],
  base: "/wtf-am-i-watching/",
});
