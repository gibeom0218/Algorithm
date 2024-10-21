function solution(n, slicer, num_list) {
  let answer;

  if (n === 1) {
    answer = num_list.slice(0, slicer[1] + 1);
  } else if (n === 2) {
    answer = num_list.slice(slicer[0], num_list.length);
  } else if (n === 3) {
    answer = num_list.slice(slicer[0], slicer[1] + 1);
  } else {
    let tmpArr;
    tmpArr = num_list.slice(slicer[0], slicer[1] + 1);
    answer = tmpArr.filter((_, idx) => idx % slicer[2] === 0);
  }

  return answer;
}

solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
