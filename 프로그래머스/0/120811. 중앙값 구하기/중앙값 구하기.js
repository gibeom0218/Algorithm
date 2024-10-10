function solution(array) {
    var answer = 0;
    let middleIdx=Math.floor(array.length/2);
    
    array.sort((a,b)=>{
        return a-b;
    })
    
    answer=array[middleIdx];
    
    return answer;
}