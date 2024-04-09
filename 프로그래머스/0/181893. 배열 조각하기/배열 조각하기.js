function solution(arr, query) {
  var answer = [];

  for (let idx = 0; idx < query.length; idx++) {
    if (idx % 2 === 0) {
      //인덱스가 짝수
      let arrIdx = query[idx]; //arr의 지정 인덱스
      arr = arr.slice(0, arrIdx + 1);
    } else {
      //인덱스가 홀수
      let arrIdx = query[idx]; //arr의 지정 인덱스
      arr = arr.slice(arrIdx);
    }
  }

  answer = arr;

  return answer;
}

solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
