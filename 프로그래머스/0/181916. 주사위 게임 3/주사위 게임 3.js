function solution(a, b, c, d) {
  var answer = 0;

  //주사위 값에 대한 배열
  let diceValue = [a, b, c, d];

  //해당 값이 몇번 나왔는지 저장되는 객체
  let diceObj = {};

  for (let el of diceValue) {
    //만약 값이 있다면 1더해주고 없다면 1로 삽입
    if (diceObj[el]) {
      diceObj[el]++;
    } else {
      diceObj[el] = 1;
    }
  }

  //객체의 value값대로 정렬
  let sortedArr = Object.entries(diceObj);
  sortedArr.sort((a, b) => {
    return a[1] - b[1];
  });
  let sortedDiceObj = Object.fromEntries(sortedArr);

  //만약에 4개 다 같은 숫자이면 객체에 값이 1개가 저장될 것이고
  //3개 같고 1개 다르거나 or 2개 같고 2개 같은 경우에는 2개가 저장될것이고
  //2개가 같고 2개가 다른 경우 3개가 저장될 것이고
  //4개 다 다른 경우에는 4개가 저장될것이다.

  if (sortedArr.length === 1) {
    answer = 1111 * Number(sortedArr[0][0]);
  } else if (sortedArr.length === 2) {
    if (sortedArr[0][1] === 1) {
      let p = Number(sortedArr[1][0]);
      let q = Number(sortedArr[0][0]);
      answer = Math.pow(10 * p + q, 2);
    } else {
      let p = Number(sortedArr[0][0]);
      let q = Number(sortedArr[1][0]);
      answer = (p + q) * Math.abs(p - q);
    }
  } else if (sortedArr.length === 3) {
    let p = Number(sortedArr[2][0]);
    let q = Number(sortedArr[0][0]);
    let r = Number(sortedArr[1][0]);
    answer = q * r;
  } else {
    answer = Number(sortedArr[0][0]);
  }

  return answer;
}

solution(2, 5, 2, 6);