function solution(lottos, win_nums) {
  var answer = [];
  const lottoRank = {
    //당첨개수 : 순위
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };

  let zeroCnt = 0;
  let winningCnt = 0;

  for (let lotto of lottos) {
    if (lotto === 0) {
      zeroCnt++;
    }
  }

  for (let lotto of lottos) {
    for (let win_num of win_nums) {
      if (lotto === win_num) {
        winningCnt++;
      }
    }
  }

  let HighRank = lottoRank[winningCnt + zeroCnt]
    ? lottoRank[winningCnt + zeroCnt]
    : 6;
  let LowRank = lottoRank[winningCnt] ? lottoRank[winningCnt] : 6;

  answer.push(HighRank, LowRank);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
