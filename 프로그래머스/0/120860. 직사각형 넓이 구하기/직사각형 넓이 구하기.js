function solution(dots) {
  var answer = 0;

  let lengthArr = [];

  function CalLength(rowNum1, rowNum2) {
    return Math.round(
      Math.sqrt(
        dots[rowNum1][0] - dots[rowNum2][0] !== 0
          ? Math.pow(dots[rowNum1][0] - dots[rowNum2][0], 2)
          : 0 + dots[rowNum1][1] - dots[rowNum2][1] !== 0
          ? Math.pow(dots[rowNum1][1] - dots[rowNum2][1], 2)
          : 0
      )
    );
  }

  lengthArr.push(CalLength(0, 1));
  lengthArr.push(CalLength(0, 2));
  lengthArr.push(CalLength(0, 3));
  lengthArr.sort((a, b) => {
    return a - b;
  });

  answer = lengthArr[0] * lengthArr[1];

  return answer;
}

console.log(
  solution([
    [0, 1],
    [10, 1],
    [10, 3],
    [0, 3],
  ])
);
