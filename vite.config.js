import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"./",
  build: {
    assetsInlineLimit: 0,  // Forces Vite to output assets as files instead of inlining them
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',  // Avoids hash in file names, making it easier to manage local files
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
    },
  }
})
