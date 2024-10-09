function solution(num_list) {
    var answer = [];
    
    num_list.sort((a,b)=>{
        return a-b;
    })
    
    for(let i=0;i<5;i++){
        answer.push(num_list[i]);
    }
    
    return answer;
}