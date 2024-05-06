function solution(X, Y) {
  var answer = "";

  let resultArr = [];
  let pairArr = {};

  for (let i = 0; i < X.length; i++) {
    if (pairArr[X[i]]) {
      pairArr[X[i]]++;
    } else {
      pairArr[X[i]] = 1;
    }
  }

  for (let i = 0; i < Y.length; i++) {
    if (pairArr[Y[i]]) {
      pairArr[Y[i]]--;
      resultArr.push(Y[i]);
    }
  }

  if (resultArr.length === 0) {
    answer = "-1";
  } else {
    resultArr.sort((a, b) => {
      return b - a;
    });
    resultArr.map((item) => {
      answer += item;
    });
  }

  //모두 0인 경우 예외처리

  let zeroCnt = 0;

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "0") {
      zeroCnt++;
    }
  }

  if (zeroCnt === answer.length) {
    answer = "0";
  }

  return answer;
}

console.log(solution("100", "203045"));
