function solution(A, B) {
  var answer = 0;

  let Astr = A;

  let ALength = A.length;

  for (let i = 0; i < ALength; i++) {
    let tmpStr = "";
    if (Astr === B) {
      break;
    } else {
      tmpStr += Astr[ALength - 1];
      for (let j = 0; j < ALength - 1; j++) {
        tmpStr += Astr[j];
      }
      Astr = tmpStr;
      answer++;
    }
  }

  if (Astr !== B) {
    answer = -1;
  }

  return answer;
}

solution("abc", "bca");
