const data = [5, 1, 3, 6, 4, 2];

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j; // undefined
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    } // 첫번째 loop 에서 data는 [5, 5, 3, 6, 4, 2], j는 -1이 된다

    // 여기서 j에 접근하기 위해 for문 이전에 j를 선언해줬던 것
    array[j + 1] = currentValue; // 그래서 여기서 data는 [1, 5, 3, 6, 4, 2]
  }
  return array;
}

// 기준이 되는 것을 하나씩 올리고
// 기준이 되는 것보다 하나 아래 것 부터 탐색

console.log(insertSort(data));
