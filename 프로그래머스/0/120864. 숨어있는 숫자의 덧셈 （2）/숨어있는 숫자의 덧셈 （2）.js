function solution(my_string) {
  var answer = 0;
  let number = "";

  for (let ch of my_string) {
    number += ch;
    if (Number(number)) {
      continue;
    } else {
      number = number.substring(0, number.length - 1);
      if (Number(number)) {
        answer += Number(number);
      }
      number = "";
    }
  }

  if (number) {
    answer += Number(number);
  }

  return answer;
}

console.log(solution("R9"));
