import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-start/', // Must match your GitHub repo name
  plugins: [react()],
});
