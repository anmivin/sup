import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@app': `${path.resolve(__dirname, './src/app/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@widgets': `${path.resolve(__dirname, './src/widgets/')}`,
      '@features': `${path.resolve(__dirname, './src/features/')}`,
      '@entities': `${path.resolve(__dirname, './src/entities/')}`,
      '@api': `${path.resolve(__dirname, './src/shared/api/')}`,
      '@components': `${path.resolve(__dirname, './src/shared/components/')}`,
      '@constants': `${path.resolve(__dirname, './src/shared/constants/')}`,
      '@type': `${path.resolve(__dirname, './src/shared/types/')}`,
      '@libs': `${path.resolve(__dirname, './src/shared/libs/')}`,
      '@stores': `${path.resolve(__dirname, './src/shared/stores/')}`,
      '@theme': `${path.resolve(__dirname, './src/shared/theme/')}`,
      '@assets': `${path.resolve(__dirname, './src/shared/assets/')}`,
      '@images': `${path.resolve(__dirname, './public/')}`,
    },
  },
});
