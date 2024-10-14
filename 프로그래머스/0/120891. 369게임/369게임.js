function solution(order) {
    var answer = 0;
    
    let str_order=String(order);
    
    for(let str of str_order){
        if(str==='3'||str==='6'||str==='9'){
            answer++;
        }
    }
    
    return answer;
}