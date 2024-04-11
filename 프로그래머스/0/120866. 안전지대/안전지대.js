function solution(board) {
  var answer = 0;

  //board는 2차원 배열
  //일단 이 배열을 반복문을 돌리면서 해당 행 열에서 상하좌우대각선에 관한 행 열이 존재하는지
  //그리고 존재한다면 1로 바꾼다.
  //위의 존재하는 조건을 반복문에서 사용하지 않고 행의 길이와 열의 길이
  //+2 확장한 새로운 판을 만들고 (쉽게말해서 테두리를 넣었다고 판단)
  //범위는 기존의 판 크기만큼 범위를 잡으면 된다.

  let row = board.length;
  let col = board[0].length;

  let newBoard = [];

  //테두리 추가 해주는 로직

  //일단 맨 위랑 맨 아래 줄의 추가는 반복문 밖에서
  let tmpArr = [];
  for (let j = 0; j < col + 2; j++) {
    tmpArr.push(0);
  }

  //newBoard 맨위 줄 [0,0,0,0....] 줄 추가
  newBoard.push(tmpArr);

  for (let i = 0; i < row; i++) {
    //board값이랑 동시에 맨 왼쪽이랑 맨 오른쪽에 0을 삽입해서 추가
    //맨 왼쪽 0 삽입
    let pushArr = [0];
    for (let j = 0; j < col; j++) {
      pushArr.push(board[i][j]);
    }
    //맨 오른쪽 0 삽입
    pushArr.push(0);
    newBoard.push(pushArr);
  }

  //newBoard 맨아래 줄 [0,0,0,0....] 줄 추가
  newBoard.push(tmpArr);

  //이제 상하좌우대각선 모든 값을 1로 변환

  for (let i = 1; i < newBoard.length - 1; i++) {
    for (let j = 1; j < newBoard[0].length - 1; j++) {
      if (newBoard[i][j] === 1) {
        newBoard[i - 1][j] = newBoard[i - 1][j] === 1 ? 1 : 2;
        newBoard[i - 1][j - 1] = newBoard[i - 1][j - 1] === 1 ? 1 : 2;
        newBoard[i - 1][j + 1] = newBoard[i - 1][j + 1] === 1 ? 1 : 2;
        newBoard[i][j - 1] = newBoard[i][j - 1] === 1 ? 1 : 2;
        newBoard[i][j + 1] = newBoard[i][j + 1] === 1 ? 1 : 2;
        newBoard[i + 1][j] = newBoard[i + 1][j] === 1 ? 1 : 2;
        newBoard[i + 1][j - 1] = newBoard[i + 1][j - 1] === 1 ? 1 : 2;
        newBoard[i + 1][j + 1] = newBoard[i + 1][j + 1] === 1 ? 1 : 2;
      }
    }
  }

  //이제 기존 board범위 내에서 1이 존재하는지 count
  for (let i = 1; i < newBoard.length - 1; i++) {
    for (let j = 1; j < newBoard[0].length - 1; j++) {
      if (newBoard[i][j] === 0) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
  ])
);
