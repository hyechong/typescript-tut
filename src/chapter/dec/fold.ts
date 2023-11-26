// 배열의 아이템 타입을 T라고 하면 배열은 T[]로 표현할 수 있다.
// T[] 타입 배열을 가공해 T 타입의 결과를 만들어내는 함수를 fold라고 한다.
// 다음은 fold 함수이며, T 타입의 배열 T[]를 가공해 T 타입의 결과를 만들어낸다.
export const fold = <T>( // T 타입의 배열을 가공해 T 타입의 결과를 만들어내는 함수
  array: T[],
  callback: (result: T, val: T) => T, // callback 함수는 T 타입의 결과를 만들어낸다.
  initValue: T
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = callback(result, value);
  }

  return result;
};
