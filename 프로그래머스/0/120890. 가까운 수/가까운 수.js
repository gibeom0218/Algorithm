function solution(array, n) {
    var answer = 0;
    let diff=101; // 배열의 값과 n 값의 차이
    
    for(let number of array){
        if(diff>Math.abs(number-n)){
            diff=Math.abs(number-n);
            answer=number;
        }
        else if(diff===Math.abs(number-n)){
             if(diff>(number-n)){
                answer=number;
            }
        }
    }
    
    return answer;
}