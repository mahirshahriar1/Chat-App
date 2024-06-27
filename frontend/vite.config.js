import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Proxy using makes request to frontend server to backend server
		// no need to incude cookie in the request with credentials: "include"
		// proxy: {
		// 	"/api": {
		// 		target: "http://localhost:5000",
		// 	},
		// },		
	},
});
