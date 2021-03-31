import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  chainWebpack(config) {
    console.log(config.resolve.alias)
  },
  fastRefresh: {},
});
