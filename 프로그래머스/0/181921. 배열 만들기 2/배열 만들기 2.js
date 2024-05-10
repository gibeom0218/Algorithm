function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 === 0) {
      let numStr = String(i);
      let cnt = 0;
      for (let str of numStr) {
        if (str === "0" || str === "5") cnt++;
      }
      if (cnt === numStr.length) {
        answer.push(i);
      }
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}

console.log(solution(5, 555));
