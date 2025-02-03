function solution(num_list, n) {
    let answer = [];
    let newArr=[];
    let count=0;
    
    for(let num of num_list){
        count++;
        newArr.push(num);
        if(count%n===0){
            answer.push(newArr);
            newArr=[];
        }
        
    }
    
    return answer;
}