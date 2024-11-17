const compareNum = (num1, num2) => {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
};

const compareArr = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    let arr1Sum = 0;
    let arr2Sum = 0;

    for (let num of arr1) {
      arr1Sum += Number(num);
    }
    for (let num of arr2) {
      arr2Sum += Number(num);
    }

    return compareNum(arr1Sum, arr2Sum);
  }
};

function solution(arr1, arr2) {
  var answer = 0;
  answer = compareArr(arr1, arr2);
  return answer;
}

console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
