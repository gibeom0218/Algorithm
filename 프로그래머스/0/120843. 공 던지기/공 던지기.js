function solution(numbers, k) {
  var answer = 0;

  if (numbers.length >= (k - 1) * 2) {
    answer = numbers[(k - 1) * 2];
  } else {
    answer = numbers[(k - 1) * 2 % numbers.length];
  }

  return answer;
}
