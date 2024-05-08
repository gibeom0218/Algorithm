function solution(lines) {
  var answer = 0;

  let obj = {};

  for (let i = 0; i < 3; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      let section = (j + (j + 1)) / 2;
      if (obj[section]) {
        obj[section]++;
      } else {
        obj[section] = 1;
      }
    }
  }

  let resultArr = Object.entries(obj);

  for (let arr of resultArr) {
    if (arr[1] >= 2) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [4, 7],
    [4, 5],
    [6, 7],
  ])
);
