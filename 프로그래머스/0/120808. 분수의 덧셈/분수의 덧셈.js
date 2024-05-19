function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let smallNum = 0;
  let flag = 0;

  let tmpResultNumer = numer1 * denom2 + numer2 * denom1;
  let tmpResultDenom = denom1 * denom2;

  if (tmpResultDenom === tmpResultNumer) {
    answer.push(1);
    answer.push(1);
  } else {
    smallNum =
      tmpResultNumer > tmpResultDenom ? tmpResultDenom : tmpResultNumer;

    for (;;) {
      for (let i = 2; i <= smallNum; i++) {
        if (tmpResultDenom % i === 0 && tmpResultNumer % i === 0) {
          tmpResultDenom = tmpResultDenom / i;
          tmpResultNumer = tmpResultNumer / i;

          break;
        } else flag++;
      }
      if (flag === smallNum - 1) {
        break;
      }
      flag = 0;
      smallNum =
        tmpResultNumer > tmpResultDenom ? tmpResultDenom : tmpResultNumer;
    }
    answer.push(tmpResultNumer);
    answer.push(tmpResultDenom);
  }

  return answer;
}

solution(1, 2, 3, 4);
