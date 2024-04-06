// const BASE_URL = "https://bootcamp-api.codeit.kr";

// async function postSignIn() {
//   const response = await fetch(`${BASE_URL}/api/sign-in`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: "test@codfdeit.com",
//       password: "sprint101",
//     }),
//   });

//   console.log(response.status);
// }

// postSignIn();

function solution(park, routes) {
  var answer = [];

  //시작 지점 찾기

  let startFlag = 0;

  for (let i = 0; i < park.length; i++) {
    if (startFlag === 1) {
      break;
    }
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        startRow = i;
        startCol = j;
        startFlag = 1;
        break;
      }
    }
  }

  //명령 수행

  for (let i = 0; i < routes.length; i++) {
    let direction = "";
    let ignoreFlag = 0;
    for (let j = 0; j < routes[0].length; j++) {
      if (routes[i][j] === " ") {
        //공백을 만나면 넘어가기
        continue;
      }

      if (routes[i][j] === "N") {
        //북쪽으로 이동
        direction = "N";
        continue;
      } else if (routes[i][j] === "S") {
        //남쪽으로 이동
        direction = "S";
        continue;
      } else if (routes[i][j] === "W") {
        //서쪽으로 이동
        direction = "W";
        continue;
      } else if (routes[i][j] === "E") {
        //동쪽으로 이동
        direction = "E";
        continue;
      }

      if (direction) {
        if (direction === "N") {
          let step = Number(routes[i][j]);
          if (startRow - step < 0) {
            //범위를 벗어난 경우
            continue;
          }
          for (let k = 1; k <= step; k++) {
            if (park[startRow - k][startCol] === "X") {
              ignoreFlag = 1;
              break;
            }
          }

          if (ignoreFlag) {
            continue;
          } else {
            startRow -= step;
          }
        } else if (direction === "S") {
          let step = Number(routes[i][j]);
          if (startRow + step > park.length - 1) {
            //범위를 벗어난 경우
            continue;
          }

          for (let k = 1; k <= step; k++) {
            if (park[startRow + k][startCol] === "X") {
              ignoreFlag = 1;
              break;
            }
          }

          if (ignoreFlag) {
            continue;
          } else {
            startRow += step;
          }
        }

        if (direction === "W") {
          let step = Number(routes[i][j]);
          if (startCol - step < 0) {
            //범위를 벗어난 경우
            continue;
          }
          for (let k = 1; k <= step; k++) {
            if (park[startRow][startCol - k] === "X") {
              ignoreFlag = 1;
              break;
            }
          }

          if (ignoreFlag) {
            continue;
          } else {
            startCol -= step;
          }
        }

        if (direction === "E") {
          let step = Number(routes[i][j]);
          if (startCol + step > park[0].length - 1) {
            //범위를 벗어난 경우
            continue;
          }
          for (let k = 1; k <= step; k++) {
            if (park[startRow][startCol + k] === "X") {
              ignoreFlag = 1;
              break;
            }
          }

          if (ignoreFlag) {
            continue;
          } else {
            startCol += step;
          }
        }
      }
    }
  }

  answer.push(startRow);
  answer.push(startCol);

  return answer;
}

solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);
