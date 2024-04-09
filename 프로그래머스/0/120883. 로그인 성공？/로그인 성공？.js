function solution(id_pw, db) {
  var answer = "";

  for (let dbArr of db) {
    if (id_pw[0] === dbArr[0] && id_pw[1] === dbArr[1]) {
      answer = "login";
      break;
    } else if (id_pw[0] === dbArr[0] && id_pw[1] !== dbArr[1]) {
      answer = "wrong pw";
    } else {
      if (answer !== "wrong pw") {
        answer = "fail";
      }
    }
  }

  return answer;
}

solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);
