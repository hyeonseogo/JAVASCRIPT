let fruits = ["사과", "바나나", "오렌지"];
/*
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/
/*
for (let fruit of fruits) {
  console.log(fruit);  배열의 요소 꺼내서 확인
}
*/
/*
// let fruits = ["사과", "바나나", "오렌지"];
fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일: ${fruit}`);
});
*/

const users = [1, "apple", "김사과", 20, "서울 광진구"];

// for 문
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
console.log("----------------");

// for..of
for (let user of users) {
  console.log(user);
}
console.log("----------------");

// forEach
users.forEach(function (user, idx, arr) {
  console.log(user, idx, arr);
});
