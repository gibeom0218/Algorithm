function solution(n) {
    var answer = [];
    
    for(let i=0;i<n;i++){
        let new_Arr=[];
        for(let j=0;j<n;j++){
            if(i==j){
                 new_Arr.push(1);
            }
            else{
                new_Arr.push(0);
            }
           
        }
       answer.push(new_Arr);
        
    }
    
    return answer;
}