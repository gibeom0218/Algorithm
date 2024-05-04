function solution(n, k) {
    var answer = [];

    let tmpArr = [];
    for (let i = 1; i <= n; i++) {
        tmpArr.push(i);
    } //임시 배열

    function fact(arr) {
        let allCase = 1; //모든 경우의 수 변수
        for (let i = arr; i >= 1; i--) {
            allCase = allCase * i;
        }
        return allCase;
    } //팩토리얼 함수

    function findStartNum(arr, order) {
        let tmpCase = fact(arr.length - 1); //첫 시작을 알아내기 위한 팩토리얼
        let startingNum = -1; //첫 시작 숫자

        let sum = 0; //숫자 합 변수

        for (let num of arr) {
            sum += tmpCase;
            if (sum >= order) {
                startingNum = num;
                answer.push(startingNum);
                tmpArr = tmpArr.filter((item) => item !== startingNum);
                break;
            }
        }
        //첫 시작 숫자를 알아냄.

        if (tmpArr.length === 1) {
            answer.push(tmpArr[0]);
            return;
        } else {
            order = order % tmpCase;
            if (order === 0) order = tmpCase;
            findStartNum(tmpArr, order);
        }
    }

    findStartNum(tmpArr, k);

    return answer;
}

solution(3, 5);
