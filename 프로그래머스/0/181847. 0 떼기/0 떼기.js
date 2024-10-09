function solution(n_str) {
    var answer = '';
    let flag=0;
    
    if(n_str[0]!=='0'){
        flag=1; //처음부터 나온 숫자가 0이 아닌 경우
    }
    
    for(let i=0; i<n_str.length;i++){
        if(flag===0 && n_str[i]==='0'){
            continue;
        }
        else{
            flag=1;
            answer+=n_str[i]
        }
    }
    
    return answer;
}