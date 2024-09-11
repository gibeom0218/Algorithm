function solution(keymap, targets) {
  var answer = [];

  for (let target of targets) {
    let sum = 0;

    for (let targetElement of target) {
      let numArr = [];

      for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
          if (key.includes(targetElement)) {
            if (key[i] === targetElement) {
              numArr.push(i + 1);
              break;
            }
          } else {
            break;
          }
        }
      }
      if (numArr.length === 0) {
        sum = 0;
        break;
      } else sum += Math.min(...numArr);
    }

    if (sum === 0) {
      answer.push(-1);
    } else {
      answer.push(sum);
    }
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "DG", "AABB"]));
