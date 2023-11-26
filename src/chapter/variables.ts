// 1. 타입스크립트 변수 선언
// : 이후의 타입은 생략 가능. 이 경우 타입스크립트는 타입을 추론(infer)한다.
// let n: number = 1;
// let b: boolean = true;
// let s: string = 'Hello';
// let o: object = {};

// console.log(n, b, s, o);

// 2. any type
// any 타입은 값의 타입과 무관하게 어떤 종류의 값도 저장할 수 있음.
let a: any = 0;
console.log(a);

// 3. 인터페이스 선언문
// let o: object = { name: 'jack', age: 32 };
// o = { first: 1, second: 2 };

// console.log(o); // 객체를 타입으로 지정하였지만, 문자나 숫자 모두 사용할 수 있는 any 형태로 실행된다. 이러한 현상을 방지하기 위해 사용하는 것이 인터페이스 선언문이다.

interface IPerson {
  name: string;
  age: number;
}

let notError: IPerson = { name: 'jack', age: 32 };

console.log(notError);

// let error1: IPerson = { name: 'jack' }; // error
// let error2: IPerson = {}; // error

// 4. 선택 속성
interface IPerson {
  name: string; // 필수 속성
  age: number; // 필수 속성
  etc?: boolean; // 선택 속성
}

// 5. 익명 인터페이스
// interface 키워드 없이 객체의 키 타입을 지정할 수 있다. 이를 익명 인터페이스라 한다.
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: 'jack', age: 32 };

console.log(ai);

// // 주로 함수의 파라미터를 지정할 때 사용
// function printMe(me: { name: string; age: number; etc?: boolean }) {
//   console.log(
//     me.etc ? `${me.name}, ${me.age}, ${me.etc}` : `${me.name}, ${me.age}`
//   );
// }

// printMe(ai);

// 6. 클래스 선언문
// 타입스크립트는 class, public, implements, extend와 같은 키워드를 제공한다. 클래스 선언문의 기본형태는 다음과 같다
/* class 클래스 이름 {
  [private | protected | public] 속성이름[?]: 속성 타입[...]
} */

class Person {
  name: string;
  age?: number;
}

let jack1: Person = new Person(); // 생성자 호출
jack1.name = 'jack';
jack1.age = 32;
console.log(jack1);

// 7. 접근 제한자
// 클래스 속성은 public, private, protecte와 같은 접근 제한자를 이름 앞에 붙일 수 있다. 생략할 경우 모두 publicㅇ로 간주한다. 이들 키워드는 클래스 선언문에 사용된다.

// 8. 생성자
// 클래스의 인스턴스를 생성할 때 new 키워드 다음에 오는 함수를 생성자(constructor)라고 한다. 생성자는 클래스의 속성을 초기화하는 역할을 한다. 생성자를 생략할 경우에는 인수를 받지 않는 기본 생성자가 자동으로 추가된다.

// class Person1 {
//   name: string;
//   age?: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let jack2: Person1 = new Person1('jack', 32);
// console.log(jack2);

// public 키워드 함축 구현 ----------------
class Person1 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person1 = new Person1('jack', 32);
console.log(jack2);
// 함축 구현 ----------------
