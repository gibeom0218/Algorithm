const calculateSlope = (dot1, dot2) => {
  const slope = (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
  return slope;
};

function solution(dots) {
  var answer = 0;

  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3])) {
    answer = 1;
  }

  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3])) {
    answer = 1;
  }

  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2])) {
    answer = 1;
  }

  return answer;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);

// 점 1 2 3 4 가 있다면
// 12 34 , 13 24, 14 23 이렇게 세가지 경우
