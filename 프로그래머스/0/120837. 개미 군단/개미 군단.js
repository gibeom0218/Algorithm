function solution(hp) {
  var answer = 0;
  //나머지 연산자를 사용

  //우선 장군개미부터
  let generalAnt = Math.floor(hp / 5);
  hp %= 5;

  //다음은 병정개미
  let soldierAnt = Math.floor(hp / 3);
  hp %= 3;

  //나머지 hp는 모두 일개미 수로 취급해도된다.
  let workerAnt = hp;

  answer = generalAnt + soldierAnt + workerAnt;

  return answer;
}

solution(999);
