function solution(s, skip, index) {
  var answer = "";
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let skipArr = skip.split("");
  let sArr = s.split("");

  //skip배열 값 제거
  for (let skipIdx in skipArr) {
    for (let alphaIdx in alphabet) {
      if (skipArr[skipIdx] === alphabet[alphaIdx]) {
        alphabet.splice(alphaIdx, 1);
      }
    }
  }

  //sArr를 돌리고 alphabet배열에서 해당 값의 idx를 구한 후 +5해준다. + 예외경우 생각
  for (let sIdx = 0; sIdx < sArr.length; sIdx++) {
    for (let alphaIdx = 0; alphaIdx < alphabet.length; alphaIdx++) {
      if (sArr[sIdx] === alphabet[alphaIdx]) {
        alphaIdx += index;
        if (alphaIdx > alphabet.length - 1) {
          let newIdx = alphaIdx % alphabet.length;
          answer += alphabet[newIdx];
        } else {
          answer += alphabet[alphaIdx];
        }
        break;
      }
    }
  }
  return answer;
}

console.log(solution("a", "cd", 2));
