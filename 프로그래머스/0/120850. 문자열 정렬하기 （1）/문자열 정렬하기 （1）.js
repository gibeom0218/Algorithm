function solution(my_string) {
    var answer = [];
    
    for(let el of my_string){
        if(Number(el)>=0){
           answer.push(Number(el)); 
        }
    }
    
    answer.sort((a,b)=>{
        return a-b;
    });
    
    return answer;
}