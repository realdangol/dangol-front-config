const prettierConfig = require("../../prettier/prettier.config");

module.exports = {
  extends: ["prettier", "eslint:recommended"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      prettierConfig,
      // {
      //   printWidth: 100,
      //   tabWidth: 2,
      //   useTabs: false,
      //   semi: true,
      //   singleQuote: true,
      //   trailingComma: "all",
      //   bracketSpacing: true,
      //   arrowParens: "always",
      // },
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    eqeqeq: "error",
  },
};
