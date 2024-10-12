function selectionSort(array) {
  let indexMin, temp;
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i; // 변경의 대상이 되는 기준 원소의 인덱스
    for (let j = i + 1; j < array.length; j++) {
      // 기준 보다 작은애가 있으면 기준을 바꿔준다.
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    temp = array[indexMin];
    array[indexMin] = array[i];
    array[i] = temp;
  }
  return array;
}
