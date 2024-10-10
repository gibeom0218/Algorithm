function solution(a, b) {
    var answer = 0;
    
    let strA=String(a);
    let strB=String(b);
    
    let newNumber=strA+strB;
    
    
    if((2*a*b)<Number(newNumber)){
        answer=Number(newNumber);
    }
    else{
        answer=(2*a*b);
    }
    
    return answer;
}