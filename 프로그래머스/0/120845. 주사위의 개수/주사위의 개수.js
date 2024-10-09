function solution(box, n) {
    var answer = 1;
    
    for(let len of box){
        answer*=Math.floor(len/n);
    }
    
    return answer;
}