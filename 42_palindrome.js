/*
    회문
    회문을 재귀함수를 통해 체크하는 프로그램을 만들어보자.

    isPalindrome(str)
*/

function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    right = str.length - 1;
  }

  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("역삼역"));
