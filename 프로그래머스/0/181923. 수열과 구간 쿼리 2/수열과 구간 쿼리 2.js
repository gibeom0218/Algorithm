function solution(arr, queries) {
  var answer = [];

  for (let array of queries) {
    let maxNum = 9999999;
    for (let idx in arr) {
      if (array[0] <= idx && idx <= array[1] && arr[idx] > array[2]) {
        if (maxNum > arr[idx]) {
          maxNum = arr[idx];
        }
      }
    }

    if (maxNum === 9999999) {
      maxNum = -1;
    }

    answer.push(maxNum);
  }

  return answer;
}

solution([5, 4, 3, 2, 1], [[0, 4, 2]]);
