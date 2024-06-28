function solution(arr, k) {
  var answer = [];
  let numObj = {};

  for (let num of arr) {
    if (answer.length === k) {
      break;
    }

    if (!numObj[num]) {
      answer.push(num);
      numObj[num] = 1;
    }
  }

  if (answer.length !== k) {
    let diff = k - answer.length;
    for (let i = 0; i < diff; i++) {
      answer.push(-1);
    }
  }

  return answer;
}

solution([0, 1, 3, 2], 3);
