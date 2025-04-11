// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위", "바위", "보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
// 둘을 비교해서 승/패/무 결과를 출력

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

const user = ["가위", "바위", "보"];
const randomNumber = Math.floor(Math.random() * 3);

if (user[randomNumber] == input) {
  console.log("무");
} else if (user[randomNumber] == "가위" && input == "바위") {
  console.log("승");
} else if (user[randomNumber] == "바위" && input == "보") {
  console.log("승");
} else if (user[randomNumber] == "보" && input == "가위") {
  console.log("승");
} else {
  console.log("패");
}
