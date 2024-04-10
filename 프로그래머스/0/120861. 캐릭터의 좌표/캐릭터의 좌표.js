function solution(keyinput, board) {
  var answer = [0, 0]; //시작지점
  let width = (board[0] - 1) / 2; //가로
  let height = (board[1] - 1) / 2; //세로
  //움직일 수 있는 최대 좌표
  for (let direction of keyinput) {
    if (direction === "left") {
      if (answer[0] > -width) {
        //움직일 수 있는 조건
        answer[0]--;
      }
    } else if (direction === "right") {
      if (answer[0] < width) {
        //움직일 수 있는 조건
        answer[0]++;
      }
    } else if (direction === "up") {
      if (answer[1] < height) {
        //움직일 수 있는 조건
        answer[1]++;
      }
    } else if (direction === "down") {
      if (answer[1] > -height) {
        //움직일 수 있는 조건
        answer[1]--;
      }
    }
  }

  return answer;
}

solution(["left", "right", "up", "right", "right"], [11, 11]);
