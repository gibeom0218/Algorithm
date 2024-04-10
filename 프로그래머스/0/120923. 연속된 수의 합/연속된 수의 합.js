function solution(num, total) {
  var answer = [];
  //일단 1부터 num 개수만큼 더해준다.
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    answer.push(i);
  }

  if (sum !== total) {
    let gap = (total - sum) / num; //얼마나 차이가 나는지에 대한 수식
    //이 gap 만큼 answer배열에 더해준다.
    for (let i = 0; i < answer.length; i++) {
      answer[i] += gap;
    }
  }
  return answer;
}

solution(3, 12);
