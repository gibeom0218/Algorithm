function solution(n, k) {
    var answer = 0;
    let lamb=n;
    let beverage=k-Math.floor(n/10);
    
    answer+=lamb*12000+beverage*2000;
    
    
    return answer;
}