function solution(land) {
  //dp로 풀어보자
  var answer = 0;
  let tmpNum = 0;

  let dp = [];
  let miniArr = [];

  for (let i = 0; i < 4; i++) {
    miniArr.push(land[0][i]);
  }
  dp.push(miniArr);
  miniArr = [];

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k && tmpNum < dp[i - 1][k]) {
          tmpNum = dp[i - 1][k];
        }
      }
      miniArr.push(land[i][j] + tmpNum);
      tmpNum = 0;
    }
    dp.push(miniArr);
    miniArr = [];
  }

  answer = Math.max(
    dp[land.length - 1][0],
    dp[land.length - 1][1],
    dp[land.length - 1][2],
    dp[land.length - 1][3]
  );

  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
