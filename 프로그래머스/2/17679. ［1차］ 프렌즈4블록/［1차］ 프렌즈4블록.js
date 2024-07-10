function solution(m, n, board) {
  var answer = 0;

  while (1) {
    let flag = 0;
    let colRowArr = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] === board[i][j + 1] && board[i][j] !== "0") {
          if (
            board[i + 1][j] === board[i + 1][j + 1] &&
            board[i][j] === board[i + 1][j]
          ) {
            flag = 1; //한번이라도 지워진적이 있다.
            colRowArr.push([i, j]);
            colRowArr.push([i, j + 1]);
            colRowArr.push([i + 1, j]);
            colRowArr.push([i + 1, j + 1]);
          }
        }
      }
    }

    if (flag === 1) {
      for (let arr of colRowArr) {
        let tmpStr = board[arr[0]];
        let newStr = "";
        for (let i = 0; i < tmpStr.length; i++) {
          if (i === arr[1]) {
            newStr += "0";
          } else {
            newStr += tmpStr[i];
          }
        }
        board[arr[0]] = newStr;
      }

      let newArr = [];

      for (let j = 0; j < n; j++) {
        let newStr = "";
        let zeroCnt = 0;
        for (let i = 0; i < m; i++) {
          if (board[i][j] !== "0") {
            newStr += board[i][j];
          } else {
            zeroCnt++;
          }
        }

        let zeroStr = "";
        for (let i = 0; i < zeroCnt; i++) {
          zeroStr += "0";
        }
        newStr = zeroStr += newStr;
        newArr.push(newStr);
      }

      let newArr2 = [];
      for (let j = 0; j < m; j++) {
        let newStr = "";
        for (let i = 0; i < n; i++) {
          newStr += newArr[i][j];
        }

        newArr2.push(newStr);
      }

      board = newArr2;
    }

    if (flag !== 1) {
      break;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "0") {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["AAAAA", "AUUUA", "AUUAA", "AAAAA"]));
