import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': {},
      'import.meta.env': JSON.stringify(dotenv.config().parsed),
    },
    optimizeDeps: {
      exclude: ['buffer', 'crypto'],
    },
    plugins: [react()],
    test: {
      includeSource: ['src/**/*.{ts,tsx,ts,tsx}'],
      coverage: {
        reporter: ['text', 'html'],
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
    },
    server: {
      host: true,
      port: env.VITE_PORT,
    },
    build: {
      sourcemap: true,
    },
  };
});
