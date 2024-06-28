function solution(numbers) {
  var answer = "";
  const numberObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let tmpNumStr = "";

  for (let number of numbers) {
    tmpNumStr += number;
    if (numberObj[tmpNumStr] >= 0) {
      answer += numberObj[tmpNumStr];
      tmpNumStr = "";
    }
  }

  answer = Number(answer);

  return answer;
}

solution("onefourzerosixseven");
