// 함수 호출 시 인수를 절달하지 않더라도 매개변수에 어떤 값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있다. 이를 디폴트 매개변수라 한다.
type PersonParam = { name: string; age: number };

// 화살표 함수를 사용하여 리턴값을 축약 반환할 때, {}에 ()를 감싸서 사용해야 한다.
// const makePerson = (name: string, age: number = 10): PersonParam => ({ name, age });

const makePerson = (name: string, age: number = 10): PersonParam => ({
  name,
  age,
});

console.log(makePerson('Jack')); // { name: 'Jack', age: 10 }
console.log(makePerson('Jack', 33)); // { name: 'Jack', age: 33 }
