function solution(numbers, hand) {
    var answer = '';

    //왼쪽 엄지손가락 좌표 -> 처음에는 *에 있음.
    let leftFinger = [3, 0];

    //오른쪽 엄지손가락 좌표 -> 처음에는 #에 있음.
    let rightFinger = [3, 2];

    //키패드 배열
    let keyPad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#'],
    ];

    //누른 숫자 반복
    for (let number of numbers) {
        //키패드에서 그 숫자 찾기
        for (let i = 0; i < keyPad.length; i++) {
            for (let j = 0; j < keyPad[0].length; j++) {
                if (keyPad[i][j] === number) {
                    if (j === 0) {
                        //왼쪽 엄지로 클릭
                        answer = answer + 'L';
                        leftFinger = [i, j];
                        break;
                    } else if (j === 2) {
                        //오른쪽 엄지로 클릭
                        answer = answer + 'R';
                        rightFinger = [i, j];
                        break;
                    } else {
                        //중간은 거리계산
                        let leftFrom = Math.abs(i - leftFinger[0]) + Math.abs(j - leftFinger[1]);
                        let rigthFrom = Math.abs(i - rightFinger[0]) + Math.abs(j - rightFinger[1]);

                        if (leftFrom > rigthFrom) {
                            // 왼쪽 거리가 클 경우
                            answer = answer + 'R';
                            rightFinger = [i, j];
                        } else if (rigthFrom > leftFrom) {
                            // 오른쪽 거리가 클 경우
                            answer = answer + 'L';
                            leftFinger = [i, j];
                        } else {
                            hand === 'left'
                                ? ((answer = answer + 'L'), (leftFinger = [i, j]))
                                : ((answer = answer + 'R'), (rightFinger = [i, j]));
                        }

                        break;
                    }
                }
            }
        }
    }

    return answer;
}

console.log(solution([0, 0], 'right'));
