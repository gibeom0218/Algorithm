function solution(picture, k) {
  var answer = [];

  for (let piece of picture) {
    let tmpArr = "";
    let dotCharCnt = 0;
    let xCharCnt = 0;
    for (let element of piece) {
      if (element === ".") {
        if (xCharCnt !== 0) {
          for (let i = 0; i < xCharCnt * k - xCharCnt; i++) {
            tmpArr += "x";
          }
        }
        xCharCnt = 0;
        tmpArr += ".";
        dotCharCnt++;
      }

      if (element === "x") {
        if (dotCharCnt !== 0) {
          for (let i = 0; i < dotCharCnt * k - dotCharCnt; i++) {
            tmpArr += ".";
          }
        }
        dotCharCnt = 0;
        tmpArr += "x";
        xCharCnt++;
      }
    }

    if (xCharCnt !== 0) {
      for (let i = 0; i < xCharCnt * k - xCharCnt; i++) {
        tmpArr += "x";
      }
    }

    if (dotCharCnt !== 0) {
      for (let i = 0; i < dotCharCnt * k - dotCharCnt; i++) {
        tmpArr += ".";
      }
    }

    for (let i = 0; i < k; i++) {
      answer.push(tmpArr);
    }
  }

  return answer;
}

solution(
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2
);
