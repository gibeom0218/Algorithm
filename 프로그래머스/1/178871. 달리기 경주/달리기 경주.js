function solution(players, callings) {

  let copyarr=players;

  let tmp={};

  for(let i in players){ //객체를 생성
    tmp[players[i]]=Number(i)+1;
  }
  
  for(let name of callings){
    let rank=tmp[name];

    let me=copyarr[rank-1]; //자기 자신 -> 순위 낮춰야하고
    let front=copyarr[rank-2]; //앞 사람 -> 순위 높여야한다.

    tmp[me]=rank-1; //나 --> 객체 안의 순위를 1등 낮추고
    tmp[front]=rank; //앞사람 --> 원래 나의 순위로 바꿔준다.

    let a=copyarr[rank-1];
    copyarr[rank-1]=copyarr[rank-2];
    copyarr[rank-2]=a;
    //그리고 배열에서 값바꿔주기
  }

  return copyarr;
}

//console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]));