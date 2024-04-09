function solution(names) {
    var answer = [];
    let cnt=0;
    for(let el of names){
        cnt++;
        if(cnt===1){
            answer.push(el);
        }
        if(cnt===5){
            cnt=0;
        }
    }
    return answer;
}