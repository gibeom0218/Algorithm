function solution(chicken) {
  var answer = 0;
  let coupon = 0;

  for (;;) {
    coupon += chicken;
    if (coupon < 10) {
      break;
    }
    answer += Math.floor(coupon / 10);
    chicken = Math.floor(coupon / 10);
    coupon = coupon % 10;
  }

  return answer;
}

console.log(solution(1081));
