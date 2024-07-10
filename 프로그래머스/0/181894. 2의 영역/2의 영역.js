function solution(arr) {
  var answer = [];

  let indicesOfTwo = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      indicesOfTwo.push(i);
    }
  }

  if (indicesOfTwo.length === 0) {
    answer.push(-1);
  } else {
    for (
      let i = indicesOfTwo[0];
      i <= indicesOfTwo[indicesOfTwo.length - 1];
      i++
    ) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
