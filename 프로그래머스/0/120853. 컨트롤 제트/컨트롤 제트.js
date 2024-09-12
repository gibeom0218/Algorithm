function solution(s) {
  var answer = 0;

  let newArr = s.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== "Z") {
      if (i !== newArr.length - 1 && newArr[i + 1] !== "Z") {
        answer += Number(newArr[i]);
      } else if (i === newArr.length - 1) {
        answer += Number(newArr[i]);
      }
    }
  }

  return answer;
}

console.log(solution("1 2 Z 3"));
