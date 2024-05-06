function solution(order) {
  var answer = 0;

  let flag = "";
  let deliverIdx = 0;

  //총 박스 개수
  let boxNum = order.length;

  //보조 컨테이너
  //가장 마지막에 보관한 상자부터 꺼낼 수 있음.
  let tmpContainer = [];

  // 1 2 3 4 5
  // 4 3 1 2 5
  //1부터 박스 개수 만큼 영재가 박스를 만질 수 있다.
  for (let box = 1; box <= boxNum; box++) {
    for (;;) {
      if (box < order[deliverIdx]) {
        tmpContainer.push(box);
        break;
      } else if (box === order[deliverIdx]) {
        answer++;
        box++;
        deliverIdx++;
        if (deliverIdx >= order.length) {
          break;
        }
      } else if (box > order[deliverIdx]) {
        while (1) {
          if (tmpContainer[tmpContainer.length - 1] === order[deliverIdx]) {
            answer++;
            deliverIdx++;
            tmpContainer.pop();
            tmpContainer.length === 0 && deliverIdx === order.length
              ? (flag = "break")
              : (flag = "continue");
            break;
          } else {
            flag = "break";
            break;
          }
        }

        if (flag === "continue") {
          flag = "";
          continue;
        } else {
          flag = "";
          break;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 4, 3, 5]));
