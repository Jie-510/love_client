import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// vant自动导入
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/assets/icons')],
      symbolId: '[name]'
    }),
    // vant
    Components({
      resolvers: [VantResolver()]
    })
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      "~": resolve(__dirname, 'types')
    }
  }
})
