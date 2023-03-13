import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //path模块是node.js内置的功能，但是node.js本身并不支持ts,解决方案：安装@types/node
import { visualizer } from 'rollup-plugin-visualizer' //查看生成stats打包视图
import viteCompression from 'vite-plugin-compression' //打包生成gz
import vitePluginImp from 'vite-plugin-imp' //按需加载antd

export default defineConfig({
  plugins: [
    react(),
    visualizer(),
    // antd 按需加载
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.less`
          }
        }
      ]
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: true //是否删除源文件
    })
  ],
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
    cors: true
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
    // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
    // minify: 'esbuild',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1500
  }
})
