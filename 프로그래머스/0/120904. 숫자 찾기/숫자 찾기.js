function solution(num, k) {
    var answer = -1;
    
    let str_num=String(num);
    
    for(let i=0;i<str_num.length;i++){
        if(Number(str_num[i])===k){
            answer=i+1;
            break;
        }
    }
    
    return answer;
}