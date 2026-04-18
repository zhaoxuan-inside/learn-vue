module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential', // 或 vue3-recommended
    'eslint:recommended',
    '@vue/typescript/recommended', // 若使用 TS
    '@vue/prettier' // 或 'plugin:prettier/recommended'，关键：必须放在最后
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 在这里可以覆盖或添加自定义规则
  }
};