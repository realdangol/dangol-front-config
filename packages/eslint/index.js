/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // prettier와 충돌 방지
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "import", "simple-import-sort"],
  rules: {
    // 포맷팅 관련은 Prettier에 맡기고, 로직 중심 룰만 넣기
    "react/react-in-jsx-scope": "off", // Next.js에서는 필요 없음
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/order": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
