import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ws': {
        target: 'ws://localhost:8080', // Your WebSocket server
        ws: true, // This option is for enabling WebSocket proxying
        changeOrigin: true, // Change origin for CORS
      }
    }
  },

});
