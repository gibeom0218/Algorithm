function solution(my_string) {
    var answer = '';
    
    let strArr=my_string.split('');
    let rvsArr=strArr.reverse();
    
    answer=rvsArr.join('');
    
    return answer;
}