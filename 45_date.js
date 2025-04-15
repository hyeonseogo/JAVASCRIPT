const now = new Date();
console.log("현재: ", now.toString());

console.log("년: ", now.getFullYear());
console.log("월: ", now.getMonth() + 1);
console.log("일: ", now.getDate());

const birthday = new Date(2001, 8, 21);
console.log("생일", birthday.toDateString());

const nowTime = now.getTime();
// console.log(nowTime);
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지남.`);
