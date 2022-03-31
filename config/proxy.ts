export default {
  dev: {
    '/api/': {
      target: 'http://localhost:8001/',
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^': '' },
    },
  },
  pre: {},
  test: {},
};
