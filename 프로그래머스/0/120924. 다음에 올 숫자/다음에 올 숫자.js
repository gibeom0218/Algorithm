function solution(common) {
    var answer = 0;
    
    //일단 common이 등차인지 등비인지 판단부터
    //2 < common의 길이 < 1,000 이 조건을 통해서 인덱스 0 1 2만으로 판단가능
    let first=common[0];
    let second=common[1];
    let third=common[2];
    
    if(third-second===second-first){
        //성립한다면 등차수열이다.
        //아래코드의 의미는 common배열에서 가장 마지막의 숫자를 차만큼 더해서 삽입하라는 뜻
       answer=common[common.length-1]+(second-first);
        
    }
    
    else{
        //아래코드의 의미는 common배열에서 가장 마지막의 숫자를 배수만큼 곱해서 삽입하라는 뜻
         answer=common[common.length-1]*(second/first);
    }
    
    return answer;
}