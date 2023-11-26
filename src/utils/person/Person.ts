let MAX_AGES = 100;

export interface IPerson {
  name: string;
  age: number;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGES): number {
  return Math.ceil(Math.random() * max); // Math.ceil() : 소수점 이하를 올림한 정수를 반환 및 Math.random() : 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환. max 이하의 정수를 반환
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});
