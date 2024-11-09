function solution(a, b) {
    var answer = 0;
    
    let str1=String(a);
    let str2=String(b);
    
    let newStr1=str1+str2;
    let newStr2=str2+str1;
    
    if(Number(newStr1)>=Number(newStr2)){
        answer=Number(newStr1);
    }
    else{
        answer=Number(newStr2);
    }
    
    
    
    return answer;
}