function solution(my_string, indices) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }

  return answer;
}

solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);
