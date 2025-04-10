/** @type {import('eslint').Linter.Config} */
export default {
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
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "import", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error", // Prettier 규칙을 에러로 처리
    "react/prop-types": "off", // TypeScript에서 타입 정의를 사용하므로 PropTypes 비활성화
    "react/react-in-jsx-scope": "off", // Next.js 등에서 React가 자동 임포트되므로 비활성화
    "no-console": ["warn", { allow: ["warn", "error"] }], // console.warn, console.error는 허용
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 언급되지 않은 변수는 경고, 매개변수 _는 제외
    eqeqeq: "error", // == 대신 === 사용을 강제
    "no-var": "error", // var 대신 let/const 사용 강제
    "prefer-const": "error", // 변경되지 않는 변수는 const로 선언
    "react/jsx-uses-react": "off", // React 17 이상에서는 JSX에서 React를 자동으로 import하므로 비활성화
    "react/jsx-uses-vars": "error", // JSX에서 사용되는 변수는 반드시 선언된 것으로 처리
    "react-hooks/rules-of-hooks": "error", // React Hooks 규칙 강제
    "react-hooks/exhaustive-deps": "warn", // useEffect 등의 의존성 배열 확인
    "no-undef": "error", // 정의되지 않은 변수를 사용할 수 없음
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // TypeScript에서 사용되지 않은 변수 경고
    "@typescript-eslint/explicit-module-boundary-types": "off", // 함수 반환 타입을 명시적으로 작성하는 규칙 비활성화
    "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용 경고
    "no-debugger": "error", // debugger 사용 금지
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
