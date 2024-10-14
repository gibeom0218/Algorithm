function solution(num_list) {
    var answer = 0;
    
    for(let num of num_list){
        
        while(1){
            if(num===1){
                break;
            }
            else{
                num%2===0? (num=Math.floor(num/2)) : (num=Math.floor((num-1)/2));
                answer++;
            }
            
        }
        
    }
    
    return answer;
}