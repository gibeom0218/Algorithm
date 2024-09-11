function solution(my_string) {
  var answer = 0;
  let new_str = my_string.split(" ");

  let isPlus = false;
  let isMinus = false;

  for (let i = 0; i < new_str.length; i++) {
    if (i === 0) {
      answer += Number(new_str[i]);
    } else if (new_str[i] === "+") {
      isPlus = true;
    } else if (new_str[i] === "-") {
      isMinus = true;
    } else {
      if (isPlus) {
        answer += Number(new_str[i]);
        isPlus = false;
      } else if (isMinus) {
        answer -= Number(new_str[i]);
        isMinus = false;
      }
    }
  }

  return answer;
}

solution("33 + 43 - 23");
