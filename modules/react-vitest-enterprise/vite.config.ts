import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://github.com/vitest-dev/vitest/discussions/4233

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/modules/react-vitest-enterprise/dist',
    test: {
        globals: true,
        environment: 'happy-dom'
    }
});
