/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // 줄 끝에 세미콜론 붙이기
  singleQuote: true, // 작은따옴표 사용
  trailingComma: 'all', // 마지막 항목에도 쉼표 붙이기 (멀티라인에서 유리)
  printWidth: 100, // 한 줄 최대 길이 (보통 100~120)
  tabWidth: 2, // 탭 간격
  useTabs: false, // 공백 2칸 대신 탭을 쓸지 여부
  bracketSpacing: true, // 객체 리터럴 중괄호 양옆에 공백
  arrowParens: 'avoid', // (x) => x 대신 x => x
  endOfLine: 'auto', // OS별 줄바꿈 스타일 자동 감지 (CRLF/LF 충돌 방지)
};
