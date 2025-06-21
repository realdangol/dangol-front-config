const base = require("./utils/base");
const react = require("./utils/react");
const typescript = require("./utils/typescript");

const recommended = {
  plugins: ["@realdangol"],
  extends: ["plugin:@realdangol/base"],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["plugin:@realdangol/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@realdangol/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};

module.exports = {
  configs: { recommended, base, react, typescript },
};
