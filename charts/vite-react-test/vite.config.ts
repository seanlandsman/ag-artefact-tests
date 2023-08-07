/// <reference types="vitest" />
import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/setupTests.ts']
    },
});
