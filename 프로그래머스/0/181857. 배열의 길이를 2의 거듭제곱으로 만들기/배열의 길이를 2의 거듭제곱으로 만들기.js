function solution(arr) {
    var answer = [];
    
    answer=arr;
    
    //우선 2의 거듭제곱을 for문으로 구하고 최초로 길이가 arr의 길이보다 길어졌을 때 stop
    
    let finalLength=1;
    
    while(1){
        if(arr.length<=finalLength){
            break;
        }
        finalLength*=2;
    }
    
    let diff=finalLength-arr.length;
    
    for(let i=0;i<diff;i++){
        answer.push(0);
    }
    
    
    return answer;
}