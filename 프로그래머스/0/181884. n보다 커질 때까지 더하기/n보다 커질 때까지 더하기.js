function solution(numbers, n) {
    var answer = 0;
    
    for(let number of numbers){
        answer+=number;
        if(answer>n){break;}
    }
    
    return answer;
}