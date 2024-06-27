function solution(rank, attendance) {
  var answer = 0;

  let rankObj = {}; // i번 학생 : 등수
  let studentCnt = 0;
  let answerArr = [];

  for (let i = 0; i < rank.length; i++) {
    rankObj[i] = rank[i];
  }

  let rankArr = Object.entries(rankObj);

  rankArr.sort((a, b) => {
    return a[1] - b[1];
  });

  for (let arr of rankArr) {
    if (studentCnt === 3) {
      break;
    }

    if (attendance[Number(arr[0])]) {
      studentCnt++;
      answerArr.push(Number(arr[0]));
    }
  }

  answer = 10000 * answerArr[0] + 100 * answerArr[1] + answerArr[2];

  return answer;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
