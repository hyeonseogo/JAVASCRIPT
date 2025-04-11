let num = 10;
num++; // 11
console.log(num); // 11
++num; // 12
console.log(num); // 12
let result = 0;
result = ++num; // 13. ++가 = 보다 우선순위가 높음.
console.log(result); // 13
result = num++; // 14. =이 ++보다 우선순위가 높음.
// 저장되는 시점이 더해지기 전이므로
console.log(result); // 13이 저장됨.
console.log("--------------------");

let a = 23;
let b = 14;
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
console.log(a << 1);
console.log(a >> 1);
