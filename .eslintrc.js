module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:orbiton/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    "orbiton"
  ],
}
