function solution(babbling) {
  var answer = 0;
  let babbleArray = ["aya", "ye", "woo", "ma"];
  let flagComplete = false; //모든 글자에 단어가 다 포함되어있는지

  for (let i = 0; i < babbling.length; i++) {
    let tmpStr = ""; //확인을 위한 임시배열

    for (let j = 0; j < babbling[i].length; j++) {
      if (babbling[i].length < 2) {
        //길이가 1이면 해당이 안되므로
        break;
      } else {
        tmpStr += babbling[i][j];

        //글자수 2이거나 3이면 위의 배열에 옹알이 단어가 있는지 확인
        if (babbleArray.includes(tmpStr)) {
          //있는 경우
          tmpStr = "";
          flagComplete = true;
        } else {
          //없는 경우
          flagComplete = false;
        }
      }
    }

    if (flagComplete) {
      answer++;
      flagComplete = false;
    }
  }

  return answer;
}

console.log(solution(["yeayamawooa", "aya"]));
