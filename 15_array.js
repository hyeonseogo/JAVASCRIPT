const user = [1, "apple", "김사과", 20, "서울 광진구"];
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);
console.log(user[5]); /* undefined */

user[7] = "여자";
console.log(user);

user[4] = "서울 강남구";
console.log(user);
console.log(user.length);

/*user = 100; const는 주소를 다른 것으로 바꾸지 못함.*/
/*
for (let i = 0; i <=7; i++) {
    console.log(user[i]);
  } 
    
i <= 7 라고 하는 것이 별로인 이유 : 
- 배열이 늘어나면, 숫자를 바꿔야 함.
- 그래서 아래와 같은 방법을 사용하기로 한다!
*/

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

console.log("-------------------------------");

// push(): 배열의 요소를 추가
user.push("ISTJ");
console.log(user);

// pop(): 배열의 마지막 인덱스 번호에 있는 값을 제거
let temp = user.pop();
console.log(user);
console.log(temp);

//shift(): 배열의 첫번째 인덱스 번호에 있는 값을 제거
temp = user.shift();
console.log(user);
console.log(temp);

//concat(): 두 배열의 요소를 합침
const profile = ["A형", "ISTJ"];
result = user.concat(profile);
console.log(result);

// join(): 배열 요소 사이에 원하는 문자를 삽입 : 배열 -> 문자열
result = user.join("🥨");
console.log(result);
console.log(typeof result);

//sort() : 배열의 요소를 오름차순
const arr = ["apple", "banana", "Apple", "orange", "melon"];
arr.sort();
console.log(arr);

//reverse(): 배열을 역순으로 재배치
arr.reverse();
console.log(arr);
