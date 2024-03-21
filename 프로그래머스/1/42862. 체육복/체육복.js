function solution(n, lost, reserve) {
  var answer = 0;

  lost.sort((a, b) => {
    return a - b;
  });
  reserve.sort((a, b) => {
    return a - b;
  });
  //오름차순 정렬

  //그리고 체육복을 도난당한 사람들 중에 여벌옷을 가지고 있었던 사람이 있을 수 있으니까
  //중복값 제거를 위한 새로운 배열 생성

  let newLost = lost.filter((lostEl) => !reserve.includes(lostEl));
  let newReserve = reserve.filter((reserveEl) => !lost.includes(reserveEl));

  let initialLostLength = newLost.length;
  let cnt = 0; //결국 체육복을 빌린 사람의 수
  for (let i = 0; i < newLost.length; i++) {
    if (newReserve.includes(newLost[i] - 1)) {
      cnt++;
      newReserve = newReserve.filter(
        (newReserveEl) => newReserveEl !== newLost[i] - 1
      );
    } else if (newReserve.includes(newLost[i] + 1)) {
      cnt++;
      newReserve = newReserve.filter(
        (newReserveEl) => newReserveEl !== newLost[i] + 1
      );
    }
  }

  answer = n - (initialLostLength - cnt);

  return answer;
}
