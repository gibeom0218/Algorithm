function solution(my_string) {
    let answer = new Array(52).fill(0);
    
    for (let char of my_string) {
        let ascii = char.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) { 
            answer[ascii - 65] += 1;
        } else if (ascii >= 97 && ascii <= 122) { 
            answer[ascii - 71] += 1; 
        }
    }
    
    return answer;
}
