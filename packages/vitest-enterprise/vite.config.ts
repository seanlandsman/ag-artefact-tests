import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/packages/vitest-enterprise/dist',
    test: {
        globals: true,
        environment: 'happy-dom',
    }
});
