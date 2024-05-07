function solution(quiz) {
  var answer = [];

  let firstNumber = 0;
  let secondNumber = 0;
  let operator = "";
  let result = 0;

  for (let question of quiz) {
    let QArr = question.split(" ");
    //각 문자열을 공백 기준으로 자름.

    //어차피 X + Y = Z 이라서 배열의 길이는 고정이다.
    firstNumber = Number(QArr[0]);
    secondNumber = Number(QArr[2]);

    operator = QArr[1];

    result = Number(QArr[4]);

    if (operator === "+") {
      firstNumber + secondNumber === result
        ? answer.push("O")
        : answer.push("X");
    } else {
      firstNumber - secondNumber === result
        ? answer.push("O")
        : answer.push("X");
    }
  }

  return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
