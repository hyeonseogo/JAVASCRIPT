/*
for (let i = 1; i <= 5; i++) {
  console.log(`현재 숫자: ${i}`);
}
*/
/*
for (let i = 1; i <= 10; i = i + 2) {
  console.log(`현재 숫자: ${i}`);
}
*/
/*
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
  console.log("");
}
*/

let dan = 2;
let i = 1;
while (dan <= 9) {
  while (i <= 9) {
    console.log(`${dan} * ${i} = ${dan * i}`);
    i++;
  }
  console.log("");
  dan++;
  i = 1;
}
