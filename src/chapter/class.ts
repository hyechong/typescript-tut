// method : 타입스크립에서 메서드는 함수 표현식을 담고 있는 클래스의 속성이다.
// 타입스크립트에서는 function 키워드로 만든 함수에 this 키워드를 사용할 수 있다.
// 반면 화살표 함수는 this 키워드를 사용할 수 없다.

class A {
  // value: number = 1;
  constructor(public value: number = 1) {} // 생성자 파라미터에 접근 제한자를 붙이면 해당 파라미터의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다. 즉, 생성자를 선언할 때 파라미터에 값을 전달하여 value 값을 설정할 수 있다.
  method: () => void = function (): void {
    console.log(`value : ${this.value}`); // 메서드 내부에서는 클래스 내의 인스턴스인 value에 this 키워드를 사용해 접근할 수 있다.
  };
}

const aVar = new A(2);
aVar.method(); // value:1

// 타입스크립트에서는 객체의 메서드를 이어서 계속 호출하는 메서드 체인을 지원한다. 이를 위해서는 메서드가 자신이 속한 객체를 반환하도록 구현해야 한다.(this를 반환하면 된다.)

class calculator {
  constructor(public value: number = 0) {} // 기본값은 0이고 생성자에 받아지는 파라미터값 적용
  add(value: number) {
    this.value += value;
    return this;
  }

  multiply(value: number) {
    this.value *= value;
    return this;
  }
}

const calc = new calculator();
const result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result); // 36
