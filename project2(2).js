// 로또번호 생성기
// 1 ~ 45까지 숫자 중 중복 없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)

const arr = [];

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 45) + 1;
  while (true) {
    if (arr.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 45) + 1;
      continue;
    } else arr.push(randomNumber);
    break;
  }
}
arr.sort((a, b) => a - b);
console.log(arr);
