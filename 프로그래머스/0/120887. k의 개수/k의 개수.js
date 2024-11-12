function solution(i, j, k) {
    var answer = 0;
    let numToChK=String(k);
    
    for(let idx=i;idx<=j;idx++){
        let numToStrIdx=String(idx);
        
        for(let ch of numToStrIdx){
            if(ch===numToChK){
                answer++;
            }
        }
        
    }
    
    return answer;
}