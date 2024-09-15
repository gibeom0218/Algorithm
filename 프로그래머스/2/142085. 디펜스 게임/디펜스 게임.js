class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 요소 추가
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 최대 값 추출
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  // 위로 올라가며 정렬 (삽입 시)
  bubbleUp() {
    let index = this.heap.length - 1;
    const insertedValue = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= insertedValue) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = insertedValue;
  }

  // 아래로 내려가며 정렬 (추출 시)
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const rootValue = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] > rootValue) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null && this.heap[rightChildIndex] > rootValue) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex] > this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }

    this.heap[index] = rootValue;
  }

  // 현재 힙의 최대 값(루트 값)을 확인 (추출하지 않음)
  peek() {
    return this.heap[0];
  }
}

function solution(n, k, enemy) {
  let answer = 0;
  let leftover = n; // 남은 병사 수
  let heap = new MaxHeap(); // 무적권을 사용한 적의 수를 저장할 최대 힙

  // 각 라운드를 돌며 적을 막아냄
  for (let i = 0; i < enemy.length; i++) {
    leftover -= enemy[i];
    heap.push(enemy[i]); // 무적권을 사용할 적을 힙에 추가

    // 병사가 부족하면 가장 큰 적에게 무적권 사용
    if (leftover < 0) {
      if (k > 0) {
        leftover += heap.pop(); // 무적권 사용하여 가장 큰 적을 막음
        k--; // 무적권 감소
      } else {
        break; // 더 이상 무적권을 사용할 수 없으면 게임 종료
      }
    }
    answer++;
  }

  return answer;
}

// 예시 실행
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 7
