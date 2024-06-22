function solution(ingredient) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      let endIndex = stack.length - 1;
      if (
        stack[endIndex] === 1 &&
        stack[endIndex - 1] === 3 &&
        stack[endIndex - 2] === 2 &&
        stack[endIndex - 3] === 1
      ) {
        stack.splice(endIndex - 3, 4);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1]));
