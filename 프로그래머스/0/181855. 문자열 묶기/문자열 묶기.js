function solution(strArr) {
  let strGroup = {}; // 예) {문자열 길이 (1) : 문자열 배열 ['a','b',...]}

  for (let str of strArr) {
    if (strGroup[str.length]) {
      //문자열 길이에 해당하는 배열이 존재한다면 push
      strGroup[str.length].push(str);
    } else {
      //존재하지 않는다면 배열 생성
      strGroup[str.length] = [str];
    }
  }

  let strGroupArr = Object.entries(strGroup);
  //객체를 배열로 변환 {1 : ['a','b',...]} -> [[1,['a','b',...]],...]

  let count = 0; //개수

  for (let strGroup of strGroupArr) {
    if (count < strGroup[1].length) {
      count = strGroup[1].length;
    }
  }

  return count;
}

solution(["a", "bc", "d", "efg", "hi"]);
