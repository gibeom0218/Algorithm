function solution(my_string, queries) {
  var answer = "";

  for (let query of queries) {
    let startIdx = query[0];
    let endIdx = query[1];

    let tmpArr = [];

    for (let i = endIdx; i >= startIdx; i--) {
      tmpArr.push(my_string[i]);
    }

    let newStr = "";

    for (let i = 0; i < my_string.length; i++) {
      if (i >= startIdx && i <= endIdx) {
        newStr += tmpArr[i - startIdx];
      } else {
        newStr += my_string[i];
      }
    }
    my_string = newStr;
  }

  answer = my_string;

  return answer;
}

solution("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);
