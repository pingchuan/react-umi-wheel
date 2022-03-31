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
  fastRefresh: {},
  title: 'dmp',
  dynamicImport: {
    loading: '@/components/pageLoading',
  },
  ignoreMomentLocale: true,
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  alias: {
    config: path.resolve(__dirname, './'),
  },
  proxy: proxy[(REACT_APP_ENV as keyof typeof proxy) || 'dev'],
});
