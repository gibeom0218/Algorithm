function solution(s) {
    var answer = '';
    let chObj={};
    
    for(let ch of s){
        if(chObj[ch]>=1){
            chObj[ch]++;
        }
        else{
            chObj[ch]=1;
        }
    }
    
    let chArray=Object.entries(chObj);
    let tmpArray=[];
    
    for(let arr of chArray){
        if(arr[1]===1){
            tmpArray.push(arr[0]);
        }
    }
    
    tmpArray.sort();
    
    
    for(let ch of tmpArray){
        answer+=ch;
    }
    
    
    return answer;
}