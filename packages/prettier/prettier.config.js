/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100, // 한 줄에 100자까지 허용 (80보다 현실적으로 널리 사용)
  tabWidth: 2, // 들여쓰기는 2칸
  useTabs: false, // 스페이스 기반 들여쓰기
  semi: true, // 항상 세미콜론 사용
  singleQuote: true, // 문자열은 작은 따옴표 사용
  trailingComma: 'all', // 마지막에도 항상 쉼표 (diff 줄이기 좋음)
  bracketSpacing: true, // { foo: bar } 형식 유지
  arrowParens: 'always', // 화살표 함수 괄호 항상 사용 (일관성 ↑)
  endOfLine: 'lf', // 줄 끝은 LF (UNIX 스타일, cross-platform 문제 방지)
};
