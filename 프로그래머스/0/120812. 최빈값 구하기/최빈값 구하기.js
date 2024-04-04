function solution(array) {
  var answer = 0;
  let obj = {}; //최빈값을 구하기 위한 객체생성 예시 ) {숫자 : 빈도수}
  let tmpArr = []; //최빈값을 저장하기 위한 배열 생성

  for (let el of array) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  for (let key in obj) {
    tmpArr.push(obj[key]);
  }

  tmpArr.sort((a, b) => {
    //내림차순 정렬
    return b - a;
  });

  if (tmpArr.length !== 1 && tmpArr[0] === tmpArr[1]) {
    //빈도수가 같은 것이 여러 개인 경우
    answer = -1;
  } else {
    //빈도수가 같은 것이 한 개인 경우
    for (let key in obj) {
      if (obj[Number(key)] === tmpArr[0]) {
        answer = Number(key);
        break;
      }
    }
  }

  return answer;
}

solution([1, 2, 3, 3, 3, 4]);
