/// <reference types="vitest" />
import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    base: '/charts/vite-react-community/dist',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/setupTests.ts']
    },
});
