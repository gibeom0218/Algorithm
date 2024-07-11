function solution(str_list) {
    var answer = [];
    
    let lIndex=-1;
    let rIndex=-1;
    
    for(let i=0;i<str_list.length;i++){
        if(str_list[i]==='l'){
            lIndex=i;
            break;
        }
        else if(str_list[i]==='r'){
            rIndex=i;
            break;
        }
    }
    
    if(rIndex===-1 && lIndex===-1){
        //빈 리스트 출력
    }
    else if(lIndex!==-1){
         for(let i=0;i<lIndex;i++){
            answer.push(str_list[i]);
        }
    }
    else if(rIndex!==-1){
        for(let i=rIndex+1;i<str_list.length;i++){
            answer.push(str_list[i]);
        }
    }
    
    
    return answer;
}