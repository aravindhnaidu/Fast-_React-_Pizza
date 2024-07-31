import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import eslintPlugin from 'vite-plugin-eslint';

export default {
  plugins: [
    eslintPlugin({
      cache: false,
      include: './src/**/*.+(js|jsx|ts|tsx)' // or your preferred file pattern
    })
  ],
  server: {
    hmr: {
      overlay: false // This disables the overlay
    }
  }
};
