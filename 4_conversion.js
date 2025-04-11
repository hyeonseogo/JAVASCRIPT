console.log(10 + 20);
console.log(10 + "20");
console.log("3" * "5");
console.log(1 - "일"); // 숫자가 아님을 의미하는 특별한 값 NaN

const num1 = "10";
const num2 = "3.5";
const num3 = 5;
console.log(`현재 num1의 타입: ${typeof num1}`);
// console.log("현재 num1의 타입:", typeof(num1));
console.log(`Number(num1)의 타입: ${typeof Number(num1)}`);
console.log(`현재 num3의 타입: ${typeof num3}`);
console.log(`String(num3)의 타입: ${typeof String(num3)}`);
console.log(`Boolean(num1)의 타입: ${typeof Boolean(num1)}, ${Boolean(num1)}`);
console.log(`Object(num1)의 타입: ${typeof Object(num1)}, ${Object(num1)}`);
console.log(
  `parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${parseInt(num2)}`
);
console.log(
  `parseFloat(num2)의 타입: ${typeof parseFloat(num2)}, ${parseFloat(num2)}`
);
