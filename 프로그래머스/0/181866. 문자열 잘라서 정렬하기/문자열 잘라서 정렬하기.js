function solution(myString) {
    var answer = [];
    let newStr='';
    

    for(let ch of myString){
        if(ch==='x'){
              if(newStr){
        answer.push(newStr);
                  newStr='';
                }
            
        }
        else{
            newStr+=ch;
        }
        
    }
    
    if(newStr){
        answer.push(newStr);
    }
    
    answer.sort();
    
    return answer;
}