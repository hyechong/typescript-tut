// 1. 타입스크립트에서 배열의 타입은 아이템 타입[]으로 표기.

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ['a', 'b', 'c'];

// 객체 타입의 배열일 때는 별도의 타입을 선엉하여 지정한다.
type ArrayPerson = { name: string; age?: number };
const personArray: ArrayPerson[] = [
  { name: 'jack' },
  { name: 'jane', age: 32 },
];

// 2. 타입스크립트에서는 문자타입이 없고 문자열의 내용 또한 변경할 수 없다. 따라서 문자열을 가공하려면 먼저 문자열을 배열로 변환해야 한다.
// 이를 위해 문자열을 나누는 split() 메서드를 사용한다.
// split(구분자: string): string[]; // 구분자를 기준으로 문자열을 나누어 배열로 반환한다.

const split = (str: string, delim: string = ''): string[] => str.split(delim);
console.log(split('hello'));
console.log(split('h_e_l_l_o', '_'));

// 3. 타입스크립드에서는 배열의 요소에 비구조화 할당을 적용할 수 있다.
const arr: number[] = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first);
console.log(second);
console.log(rest); //나머지는 배열에 묶여서 출력

// 4. 배열을 다루는 함수를 작성할 때는 타입이 고정된 함수보다는 T[] 형태로 배열의 아이템 타닙을 한꺼번에 표현하는 제네릭 함수를 선호한다.
// const arrayLength = (array) => array.length;
// 위 함수가 number[], string[] 등의 타입을 가진 배열을 처리할 수 있도록 타입을 지정하려면 다음과 같이 타입을 지정해야 한다.

const arrayLength = <T>(array: T[]): number => array.length; // T는 타입 변수이다. 타입 변수는 타입을 담는 변수이다. T가 변수 타입이라는 것을 알려주기 위해 <T>를 사용한다.
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0; // 읽으려는 배열이 비어있는지 확인

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['Hello', 'World'];
type NewIPerson = { name: string; age?: number };
let personArray2: NewIPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];

console.log(arrayLength(numberArray)); // 3
console.log(arrayLength(stringArray)); // 2
console.log(arrayLength(personArray2)); // 2
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2])); // false
