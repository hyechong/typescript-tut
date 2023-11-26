// tuple은 배열 요소의 타입을 배열로 나열하여 이름을 붙인 것이다.
// const array: number[] = [1, 2, 3];
// const tuple: [boolean, number, string] = [true, 1, 'Ok'];

// 위 타입에 이름을 붙이면 tuple타입이 된다. 배열에 나열될 요소의 타입을 배열로 나열하여 이름을 붙인 것
type TupleType = [boolean, number, string];

const doSomething = (): TupleType => {
  try {
    throw new Error('Error...');
  } catch (e) {
    return [false, 0, 'Error'];
  }
};

console.log(doSomething()); // [false, 0, 'Error']
