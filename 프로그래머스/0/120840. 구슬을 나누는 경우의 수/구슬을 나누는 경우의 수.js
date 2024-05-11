function solution(balls, share) {
  var answer = 0;
  let firstNum = 1;
  let secondNum = 1;

  let cnt = 0;

  for (let i = balls; i >= 1; i--) {
    if (cnt === share) {
      break;
    }

    firstNum = firstNum * i;
    cnt++;
  }

  for (let i = share; i >= 1; i--) {
    secondNum = secondNum * i;
  }

  answer = Math.floor(firstNum / secondNum);

  return answer;
}

solution(5, 3);
