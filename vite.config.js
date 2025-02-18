import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://fwpcctwt-5000.inc1.devtunnels.ms', // The external API URL
        changeOrigin: true, // This modifies the Origin header to the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: strips the /api prefix from the path
        secure: false, // Set to false if the target uses an insecure (HTTP) protocol
      },
    },
  },
});
