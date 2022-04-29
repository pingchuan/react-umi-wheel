import path from 'path';
import { defineConfig } from 'umi';

import proxy from './proxy';
import routes from './router';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  dva: { hmr: true },
  fastRefresh: {},
  title: 'react-umi-wheel',
  dynamicImport: {
    loading: '@/components/pageLoading',
  },
  ignoreMomentLocale: true,
  alias: {
    config: path.resolve(__dirname, './'),
  },
  proxy: proxy[(REACT_APP_ENV as keyof typeof proxy) || 'dev'],
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
  theme: {
    'root-entry-name': 'variable',
  },
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        antdVendor: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          name: 'antdVendor',
          priority: 20,
        },
      },
    });
  },
  chunks: ['antdVendor'],
  mfsu: {},
});
