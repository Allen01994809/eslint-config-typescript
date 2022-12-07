module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'import/newline-after-import': 'error'
  }
}
