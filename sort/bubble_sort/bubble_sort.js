// 버블 정렬은 O(n^2)의 시간복잡도를 가진다.

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      // 배열의 맨 처음부터 시작
      // 연속하는 두 원소를 비교해서 직전원소가 더 크다면
      if (array[j - 1] > array[j]) {
        // 그 다음 원소를 temp에 담고
        const temp = array[j];
        // 직전원소랑 다음 원소의 자리를 바꾼다
        array[j] = array[j - 1];
        // 직전 원소에는 temp로 바꾼다
        array[j - 1] = temp;
        console.log(array);
      }
    }
  }
}

bubbleSort([3, 1, 6, 2]);
