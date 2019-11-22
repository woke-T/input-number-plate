module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["plugin:vue/base"],
  rules: {
    "no-console": 0,
    "no-debugger": 1
  }
};
