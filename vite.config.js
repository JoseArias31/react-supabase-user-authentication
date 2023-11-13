// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Cambia el número del puerto según sea necesario
  },
  plugins: [react()],
});
