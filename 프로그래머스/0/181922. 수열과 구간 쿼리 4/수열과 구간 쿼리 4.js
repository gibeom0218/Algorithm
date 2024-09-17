function solution(arr, queries) {
  //var answer = [];

  for (let query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      if (i % query[2] === 0) {
        arr[i]++;
      }
    }
  }

  return arr;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ]
);
