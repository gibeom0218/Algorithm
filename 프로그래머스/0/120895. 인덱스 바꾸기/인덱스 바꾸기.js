function solution(my_string, num1, num2) {
  var answer = "";
  let num1Str = my_string[num1];
  let num2Str = my_string[num2];

  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += num2Str;
    } else if (i === num2) {
      answer += num1Str;
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

solution("hello", 1, 2);
