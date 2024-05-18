function solution(polynomial) {
  var answer = "";

  let tmpArr = [];
  let tmpStr = "";
  let result = {};

  let tmpNum = "";

  for (let ch of polynomial) {
    if (ch === "+") continue;

    if (ch === " " && tmpStr) {
      tmpArr.push(tmpStr);
      tmpStr = "";
    } else if (ch !== " ") tmpStr += ch;
  }
  tmpArr.push(tmpStr);

  for (let poly of tmpArr) {
    if (poly.includes("x")) {
      if (poly.length === 1) {
        !result["poly"] ? (result["poly"] = 1) : result["poly"]++;
      } else {
        for (let ch of poly) {
          if (ch === "x") break;
          tmpNum += ch;
        }

        !result["poly"]
          ? (result["poly"] = Number(tmpNum))
          : (result["poly"] += Number(tmpNum));
        tmpNum = "";
      }
    } else {
      !result["num"]
        ? (result["num"] = Number(poly))
        : (result["num"] += Number(poly));
    }
  }

  if (result["poly"] && result["num"]) {
    result["poly"] === 1
      ? (answer = `x + ${result["num"]}`)
      : (answer = `${result["poly"]}x + ${result["num"]}`);
  } else if (result["poly"] && !result["num"]) {
    result["poly"] === 1 ? (answer = `x`) : (answer = `${result["poly"]}x`);
  } else if (!result["poly"] && result["num"]) {
    answer = `${result["num"]}`;
  }

  return answer;
}
solution("x + x + x");
