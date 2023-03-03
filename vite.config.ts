import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //path模块是node.js内置的功能，但是node.js本身并不支持ts,解决方案：安装@types/node
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig({
  plugins: [react(), removeConsole()],
  resolve: {
    //路径别名
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  base: './',
  //跨域
  server: {
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    port: 3000,
    open: true,
    cors: true,
    // https: false,
    // 代理跨域（mock 不需要配置，这里只是个事列）
    // proxy: {
    //   '/api': {
    //     target: 'https://mock.xx.com/mock/x', // easymock
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },

  // 样式
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#5C91FB'
        },
        javascriptEnabled: true,
        additionalData: '@import "@/styles/variables.less";'
      }
    }
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500
  }
})
