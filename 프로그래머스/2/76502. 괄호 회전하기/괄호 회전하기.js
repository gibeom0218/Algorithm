let answer = 0;
let map = { "{": "}", "(": ")", "[": "]" };

function checkBrackets(arr) {
  let stack = [];

  for (let ch of arr) {
    stack.push(ch);
    if (stack.length >= 2) {
      if (stack[stack.length - 1] === map[stack[stack.length - 2]]) {
        stack.pop();
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    answer++;
  }
}

function solution(s) {
  let s_Arr = s.split("");

  for (let i = 0; i < s_Arr.length; i++) {
    checkBrackets(s_Arr);
    let firstElement = s_Arr.shift();
    s_Arr.push(firstElement);
  }

  return answer;
}


