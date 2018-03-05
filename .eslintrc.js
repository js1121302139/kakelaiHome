// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': "off",
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
    'no-extra-semi': 'error',
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-function-paren':0,
    'eol-last': 'off',
    'spaced-comment': 0,
    'eslint space-before-function-paren': 'off',
    'no-eval': 0,
    'no-return-assign': 0,
    "eqeqeq":["error", "always", {"null": "ignore"}]
  }
}
