function solution(N, stages) {
  var answer = [];

  let stagesFailRate = []; //이차원 배열 [스테이지,실패율]

  for (let i = 1; i <= N; i++) {
    let challengeUser = 0; //도전한 사용자 수
    let notClearUser = 0; //그중 클리어 하지 못한 사용자 수

    for (let stage of stages) {
      if (stage >= i) {
        challengeUser++;

        if (stage === i) {
          //같은 경우에는 클리어하지 못함.
          notClearUser++;
        }
      }
    }

    stagesFailRate.push([i, notClearUser / challengeUser]);
  }

  stagesFailRate.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let arr of stagesFailRate) {
    answer.push(arr[0]);
  }

  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
