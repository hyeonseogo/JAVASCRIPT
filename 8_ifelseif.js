/*let age = 13;

if (age >= 18) {
  console.log("성인입니다");
} else if (age >= 13) {
  console.log("청소년입니다");
}else if(age >= 6){
  console.log("어린이입니다");
} else {
  console.log("유아입니다");
}
*/

let kor = 100;
let eng = 76;
let math = 95;
let total = kor + eng + math; // 총점
let avg = total / 3; // 평균
// 평균을 기준으로 90점이상 A, 80점이상 B, 70점 이상 C, 60점 이상 D, 나머지는 F

/*
    총점: XX점
    평균: XX점
    학점: X
*/

console.log(`총점: ${total}`);
console.log(`평균: ${avg}`);

if (avg >= 90) {
  console.log(`학점: A`);
} else if (avg >= 80) {
  console.log(`학점: B`);
} else if (avg >= 70) {
  console.log(`학점: C`);
} else if (avg >= 60) {
  console.log(`학점: D`);
} else {
  console.log(`학점: F`);
}
