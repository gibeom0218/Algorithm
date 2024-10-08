function solution(str1, str2) {
  var answer = 2;
  for (let i = 0; i <= str1.length - str2.length; i++) {
    if (str1.substr(i, str2.length) === str2) {
      answer = 1;
      break;
    }
  }

  return answer;
}

