function solution(num_list) {
    var answer = -999;
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]<0){
            answer=i;
            break;
        }
    }
    
    if(answer===-999){answer=-1;}
    
    return answer;
}