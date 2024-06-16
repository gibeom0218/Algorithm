function solution(queue1, queue2) {
  var answer = -2;

  function sum(queue, index) {
    let result = 0;
    for (let i = index; i < queue.length; i++) {
      result += queue[i];
    }
    return result;
  }

  let sumQ1 = sum(queue1, 0);
  let sumQ2 = sum(queue2, 0);

  let cnt = 0;

  let q1Index = 0;
  let q2Index = 0;

  let totalLen = queue1.length + queue2.length;

  for (;;) {
    if (sumQ1 === sumQ2) {
      break;
    }

    if (q1Index > totalLen || q2Index > totalLen) {
      return -1;
    }

    if (sumQ1 > sumQ2) {
      sumQ1 -= queue1[q1Index];
      sumQ2 += queue1[q1Index];
      queue2.push(queue1[q1Index]);
      q1Index++;
      cnt++;
    } else if (sumQ1 < sumQ2) {
      sumQ2 -= queue2[q2Index];
      sumQ1 += queue2[q2Index];
      queue1.push(queue2[q2Index]);
      q2Index++;
      cnt++;
    }
  }

  return cnt;
}
console.log(solution([101, 100], [102, 103]));
