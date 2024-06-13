function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    let cntSecond = 0;
    let flag = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        cntSecond++;
        continue;
      } else {
        cntSecond++;
        answer.push(cntSecond);
        flag = 1;
        cntSecond = 0;
        break;
      }
    }
    if (flag === 0) {
      answer.push(cntSecond);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
