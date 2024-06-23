function solution(board, moves) {
  var answer = 0;
  let newBoard = [];
  let basket = [];
  //let boardIdx = {};
  let boardSize = board.length;

  for (let i = 0; i < boardSize; i++) {
    let tmpArr = [];
    for (let j = 0; j < boardSize; j++) {
      tmpArr.push(board[j][i]);
    }
    newBoard.push(tmpArr);
  }

  for (let i = 0; i < boardSize; i++) {
    let tmpArr = [];
    for (let j = 0; j < boardSize; j++) {
      if (newBoard[i][j] !== 0) {
        tmpArr.push(newBoard[i][j]);
      }
    }
    newBoard[i] = tmpArr;
  }

  // for (let i = 1; i <= boardSize; i++) {
  //   boardIdx[i] = 0;
  // }

  for (let i = 0; i < moves.length; i++) {
    if (newBoard[moves[i] - 1].length !== 0) {
      basket.push(newBoard[moves[i] - 1][0]);
      //boardIdx[moves[i]]++;
      newBoard[moves[i] - 1].shift();
    }

    if (basket.length >= 2) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        answer += 2;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 2, 2, 3],
    ],
    [1, 2, 3]
  )
);
