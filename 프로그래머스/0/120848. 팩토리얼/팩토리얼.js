function solution(n) {
    var answer = 0;
    let number=1;
    
    while(1){
        answer=answer+1;
        
        number*=answer;
        if(number>n){
            answer=answer-1;
            break;
        }
        
    }
    
    
    return answer;
}