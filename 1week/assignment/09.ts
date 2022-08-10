/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

function prettyPrint(x: {mop: (v:typeof prettyPrint)=>string[]}): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.mop(prettyPrint).join(', ') + ']';

  if (typeof x === 'object') return Object.keys(x).join(', ');

  return 'etc.';
}
