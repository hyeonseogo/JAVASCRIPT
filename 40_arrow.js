/*// 일반 함수
function add1(a, b) {
  return a + b;
}

// 화살표 함수
const add2 = (a, b) => a + b;

// 매개변수가 1개일 때 괄호 생략 가능
const square = (x) => x * x;

// 코드 블록이 있을 경우 return을 명시해야 함
const add3 = (a, b) => {
  return a + b;
};

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(function () {
      console.log("안녕! 나는" + this.name);
      // 일반함수에서 this의 특징 : 가장 가까운 곳을 가리킴.
    }, 1000); // 1000 -> 1초 // 안녕! 나는undefined
  },
};

obj.sayHello();
*/

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {
      console.log("안녕! 나는" + this.name);
    }, 1000); // 1000 -> 1초
    // 외부 스코프의 this를 유지함.
  },
};

obj.sayHello();
