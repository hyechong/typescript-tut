// 1. 함수 타입 설정
/**
 function 함수이름(파라미터1: 타입1, 파라미터2: 타입2): 함수의반환값 {}
 */

// function add(a: number, b: number): number {
//   return a + b;
// }

// let result = add(1, 2);
// console.log(result);

// 2. void 타입
// void 타입은 함수의 반환 타입으로, 함수가 반환하는 값이 없을 때 사용한다. void 타입에는 undefined만 할당할 수 있다. 즉, 결과에 값과 함께 undefined가 출력된다.
// function printMe(name: string, age: number): void {
//   console.log(`${name}, ${age}`);
// }

// console.log(printMe('jack', 32));

// 3. 일급 함수
// 일급 함수는 함수를 값으로 다룰 수 있는 특성을 말한다. 즉, 함수를 변수에 담을 수 있고, 함수를 인자로 전달할 수 있으며, 함수를 반환할 수도 있다.
let f = function (a: number, b: number): number {
  return a + b;
};

f = function (a: number, b: number): number {
  return a - b;
};

console.log(f(1, 2));
