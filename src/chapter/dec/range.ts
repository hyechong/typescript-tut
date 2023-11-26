export const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
  // from 은 0보다 크고 to 보다 작을 때, from 을 포함한 배열과 from + 1 과 to 를 재귀적으로 호출한 배열을 합친다.
  // 따라서 from의 값을 1부터 시작하기 위해 +1을 해준다.
  // to 보다 작은 값이기 때문에 지정된 to 값 보다 하나 작은 값까지만 배열에 포함된다.
};

const numbers: number[] = range(1, 10);
console.log(numbers);
