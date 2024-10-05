const AGE_OBJ = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    '4': 'e',
    '5': 'f',
    '6': 'g',
    '7': 'h',
    '8': 'i',
    '9': 'j',
};


function solution(age) {
    var answer = '';
    let str_age=String(age);
    
    for(let ch of str_age){
        answer+=AGE_OBJ[ch];
    }
    
    return answer;
}