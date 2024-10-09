function solution(myString, pat) {
  var answer = 0;
  let newStr = "";

  for (let ch of myString) {
    ch === "A" ? (newStr += "B") : (newStr += "A");
  }

  if (newStr.includes(pat)) {
    answer = 1;
  }

  return answer;
}

