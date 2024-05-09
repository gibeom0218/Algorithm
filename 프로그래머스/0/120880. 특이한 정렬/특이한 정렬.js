function solution(numlist, n) {
  var answer = [];

  let obj = {};

  for (let num of numlist) {
    obj[num] = Math.abs(num - n);
  }

  let tmpArr = Object.entries(obj);

  tmpArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  for (let arr of tmpArr) {
    answer.push(Number(arr[0]));
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
