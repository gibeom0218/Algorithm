function solution(arr) {
  var stk = [];

  for (let i = 0; i < arr.length; i++) {
    let stkLen = stk.length;

    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (arr[i] > stk[stkLen - 1]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    }
  }

  return stk;
}

solution([1, 4, 2, 5, 3]);
