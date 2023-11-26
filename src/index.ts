import { IPerson, makePerson } from './utils/person/Person';

const testMakePerson = (): void => {
  // void : 함수의 반환값이 없을 때 사용
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
};

testMakePerson();
