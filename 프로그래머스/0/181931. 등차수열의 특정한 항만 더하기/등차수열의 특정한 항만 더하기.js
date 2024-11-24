function solution(a, d, included) {
    var answer = 0;
    
    let sequence=[]; //등차수열 배열
    let included_len=included.length;
    
    for(let i=0;i<included_len;i++){
       included[i]===true? (answer+=(a+d*i)) : (answer+=0) ;
    }
    
    
    return answer;
}