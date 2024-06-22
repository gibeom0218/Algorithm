function solution(participant, completion) {
  var answer = "";
  let participantObj = {};

  for (let person of participant) {
    if (!participantObj[person]) {
      participantObj[person] = 1;
    } else {
      participantObj[person]++;
    }
  }

  for (let person of completion) {
    if (!participantObj[person]) {
    } else {
      participantObj[person]--;
    }
  }

  let answerArr = Object.entries(participantObj);

  for (let arr of answerArr) {
    if (arr[1] === 1) {
      answer = arr[0];
      break;
    }
  }

  return answer;
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
