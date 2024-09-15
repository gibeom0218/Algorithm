function solution(dirs) {
  var answer = 0;
  let dot = [0, 0];
  let roadSet = new Set();

  for (let dir of dirs) {
    let [x, y] = dot; //현재 좌표
    let nextX = x;
    let nextY = y;

    if (dir === "U" && y < 5) {
      nextY += 1;
    } else if (dir === "D" && y > -5) {
      nextY -= 1;
    } else if (dir === "L" && x > -5) {
      nextX -= 1;
    } else if (dir === "R" && x < 5) {
      nextX += 1;
    }

    if (nextX === x && nextY === y) continue;

    const road = `${x},${y}=>${nextX},${nextY}`;
    const reverseRoad = `${nextX},${nextY}=>${x},${y}`;

    if (!roadSet.has(road) && !roadSet.has(reverseRoad)) {
      roadSet.add(road);
      roadSet.add(reverseRoad);
      answer++;
    }

    dot = [nextX, nextY];
  }

  return answer;
}

solution("ULURRDLLU");
