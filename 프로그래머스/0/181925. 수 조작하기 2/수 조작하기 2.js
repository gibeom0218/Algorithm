function solution(numLog) {
  var answer = "";
  const numObj = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };
  //다음 숫자 - 현재 숫자의 값에 따라 알파벳이 나오는 객체

  for (let i = 0; i < numLog.length - 1; i++) {
    answer += numObj[numLog[i + 1] - numLog[i]];
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
