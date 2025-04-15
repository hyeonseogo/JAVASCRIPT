/*
console.log("물 끓이기 시작!");
setTimeout(function () {
  console.log("면 넣기!");
}, 3000);
console.log("계란 준비하기!");
*/
/*
function greet(name, callback) {
  console.log(`안녕 ${name}!`);
  callback();
}

function sayBye() {
  console.log("잘 가~");
}

greet("김사과", sayBye);
*/
/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
*/
/*
function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(() => {
  console.log("작업 완료!");
});
*/
const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return;

  const result = action(num1, num2);
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));
