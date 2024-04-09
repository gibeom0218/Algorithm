function solution(score) {
  var answer = [];

  let avgArr = []; //평균점수를 담을 배열
  let sortedArr = []; //정렬할 배열을 따로 하나 만듦

  //값 읽어오기
  for (let scoreArr of score) {
    avgArr.push((scoreArr[0] + scoreArr[1]) / 2);
    sortedArr.push((scoreArr[0] + scoreArr[1]) / 2);
  }

  sortedArr.sort((a, b) => {
    return b - a;
  });

  //tmpArr와 avgArr 비교

  for (let el of avgArr) {
    for (let idx = 0; idx < sortedArr.length; idx++) {
      if (el === sortedArr[idx]) {
        answer.push(idx + 1);
        break;
      }
    }
  }

  return answer;
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
