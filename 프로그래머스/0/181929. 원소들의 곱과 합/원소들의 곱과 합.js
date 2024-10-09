function solution(num_list) {
    var answer = 0;
    let multiSum=1;
    let sum=0;
    
    for(let num of num_list){
        multiSum*=num;
        sum+=num;
    }
    
    if(multiSum<Math.pow(sum,2)){
        answer=1;
    }
    
    return answer;
}