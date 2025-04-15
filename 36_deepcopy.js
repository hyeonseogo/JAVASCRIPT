function deepCopy(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // 배열인 경우[100,200,300]
  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepCopy(value[i]); // 재귀 함수
    }
    return result;
  }

  // 객체인 경우
  const result = {};
  for (let key in value) {
    result[key] = deepCopy(value[key]);
  }
  return result;
}

const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};

const copy = deepCopy(original);
copy.name = "김사과";
copy.scores[0] = 70;
copy.address.city = "부산";

console.log(original.name);
console.log(original.scores);
console.log(original.address);
