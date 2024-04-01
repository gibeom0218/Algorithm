function solution(arr1, arr2) {
  var answer = [];
  let rowCnt = 0; //행의 길이 계산
  rowCnt = arr1.length; //arr2[0]으로 해도 무방

  let colCnt = 0; //열의 길이 계산
  colCnt = arr1[0].length;

  for (let i = 0; i < rowCnt; i++) {
    let tmpArr = []; //answer배열에 삽입할 임시배열
    for (let j = 0; j < colCnt; j++) {
      tmpArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmpArr);
  }

  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
