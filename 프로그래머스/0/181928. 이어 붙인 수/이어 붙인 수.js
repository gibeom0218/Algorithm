function solution(num_list) {
    var answer = 0;
    
    let even='';
    let odd='';
    
    
    for(let num of num_list){
        if(num%2===0){
            even+=String(num);
        }
        else{
            odd+=String(num);
        }
    }
    
    answer=(Number(even)+Number(odd));
    
    return answer;
}