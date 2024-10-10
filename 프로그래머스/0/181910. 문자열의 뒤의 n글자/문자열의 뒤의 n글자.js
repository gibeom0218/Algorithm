function solution(my_string, n) {
    var answer = '';
    let startIdx=my_string.length-n;
    
    for(let i=startIdx;i<my_string.length;i++){
        answer+=my_string[i];
    }
    
    return answer;
}