import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuesetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //读取环境
  const env = loadEnv(mode, process.cwd())
  return {
    base:'./',
    plugins: [vue(),vuesetupExtend()],
    server: {
      //设置端口号为8888
      port: 8888,
      //启动项目时,自动打开浏览器
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // target: 'http://vue3.mengxuegu.com/pro-api',
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`),'')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
