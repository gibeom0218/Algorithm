function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let primeCnt = 0; //약수의 개수 변수

    for (let j = 1; j <= i; j++) {
      //1부터 해당 숫자까지 약수가 있는지
      if (i % j == 0) {
        primeCnt++;
      }
    }

    //약수의 개수가 짝수이면 더하고 홀수이면 빼고
    if (primeCnt % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

console.log(solution(13, 17));
