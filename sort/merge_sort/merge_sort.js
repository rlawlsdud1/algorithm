// 합병 정렬(or 병합 정렬)
// 크게 3단계로 구성된다.
// 1. 최소 단위까지 문제를 분할한다.
// 2. 최소 단위 문제를 각각 해결하여 정복한다.
// 3. 최소 단위 문제에 대한 결과를 원래 문제에 대한 결과로 조합하여 해결한다.
// 버블, 선택, 삽입 정렬보다 시간복잡도가 좋다 O(n log n)
// but 공간 복잡도는 O(n log n)

// 재귀함수의 호출순서에 대해 확실하게 숙지해야 함
// 하나의 요소만 포함하는 하위 배열로 나눈다
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2); // 중간 인덱스 찾기
  const left = arr.slice(0, mid); // 중간 원소보다 작은 값이 모인 배열
  const right = arr.slice(mid); // 중간 원소보다 큰 값이 모인 배열

  return merge(mergeSort(left), mergeSort(right));
}

// mergeSort([38, 27, 43, 3, 9, 82, 10])
// ├── mergeSort([38, 27, 43]) <- 5. merge 함수의 인자로 [38], [27, 43]을 넣어주고 [27,38,43] 반환
// │   ├── mergeSort([38]) <- 4. [38] 반환
// │   └── mergeSort([27, 43]) <- 3. merge 함수의 인자로 [27], [43]을 넣어주고 [27,43] 을 반환
// │       ├── mergeSort([27]) <- 1. [27] 반환
// │       └── mergeSort([43]) <- 2. [43] 반환
// ├── mergeSort([3, 9, 82, 10])
// │   ├── mergeSort([3, 9])
// │   │   ├── mergeSort([3])
// │   │   └── mergeSort([9])
// │   └── mergeSort([82, 10])
// │       ├── mergeSort([82])
// │       └── mergeSort([10])

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    // left 와 right 를 비교하면서 더 작은 값을 merged에 push하고
    // 작은 값 쪽에서의 index를 증가시킨다
    // 어느 한쪽의 index가 길이에 도달하면 while문 빠져나옴
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 체크하지 못한 것들 확인하는 loop
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }
  return merged;
}

// 예시
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
