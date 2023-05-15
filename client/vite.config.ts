import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    // 设置服务器端口号和代理
    server: {
        // 设置端口号为8000
        port: 8000,
        proxy: {
            '/api': {
                // 将请求代理到本地的3000端口
                target: 'http://localhost:3000',
                // 改变源
                changeOrigin: true,
                // 重写路径
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
