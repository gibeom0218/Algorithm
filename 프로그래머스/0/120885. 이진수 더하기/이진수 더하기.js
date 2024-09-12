//이진수 -> 숫자 함수
const binaryToNum = (bin) => {
  let number = 0; //숫자
  let expo = 0; //지수

  let len = bin.length;

  for (let i = len - 1; i >= 0; i--) {
    if (bin[i] === "1") {
      number += Math.pow(2, expo);
    }
    expo++;
  }
  return number;
};

//숫자 -> 이진수 함수
const numToBinary = (num) => {
  let bin = "";

  while (1) {
    if (num < 1) {
      break;
    }

    bin += String(num % 2);
    num = Math.floor(num / 2);
  }

  let binArr = bin.split("");
  binArr.reverse();
  bin = "";

  for (let el of binArr) {
    bin += el;
  }

  return bin;
};

function solution(bin1, bin2) {
  var answer = "";
  let tmp = binaryToNum(bin1) + binaryToNum(bin2);

  answer = numToBinary(tmp);

  return answer === "" ? "0" : answer;
}

solution("10", "11");
