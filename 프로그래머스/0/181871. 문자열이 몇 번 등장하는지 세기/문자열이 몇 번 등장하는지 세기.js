function solution(myString, pat) {
  var answer = 0;

  let patLen = pat.length;
  //주어진 문자열의 길이

  let initialStr = "";
  for (let i = 0; i < patLen; i++) {
    initialStr += myString[i];
  }
  //초기 문자열 값

  if (initialStr === pat) {
    answer++;
  }

  for (let i = patLen; i < myString.length; i++) {
    initialStr = initialStr.substring(1);

    initialStr += myString[i];

    if (initialStr === pat) {
      answer++;
    }
  }

  return answer;
}

solution("banana", "ana");
