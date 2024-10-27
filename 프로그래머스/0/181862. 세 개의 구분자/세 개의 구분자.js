function solution(myStr) {
  var answer = [];
  let tmpStr = "";
  let separator = ["a", "b", "c"];

  const checkEmptyStr = (str) => {
    if (str) {
      answer.push(str);
      tmpStr = "";
    }
  };

  for (let ch of myStr) {
    if (!separator.includes(ch)) {
      tmpStr += ch;
    } else {
      checkEmptyStr(tmpStr);
    }
  }

  checkEmptyStr(tmpStr);

  if (answer.length === 0) {
    answer.push("EMPTY");
  }

  return answer;
}

console.log(solution("baconlettucetomato"));
