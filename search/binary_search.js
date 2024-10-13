// 1단계 : 전체 배열의 중간 인덱스의 원소와 검색값을 비교
// 2단계 : 검색값이 배열의 좌우 한 곳에 포함되면 다시 1단계를 반복
// 이미 정렬된 상태여야 이진 탐색이 가능하다.
// 맨앞에서부터 순차적으로 찾는 것보다 검색의 횟수를 줄일 수 있다.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 배열의 중간 인덱스
    console.log("right: ", right);
    console.log("left: ", left);
    console.log(`mid: `, mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 끝내 target이 발견이 안돼서 while문의 조건에 맞지 않는 순간이 올 것이고
  // 검색값이 배열에 존재하지 않는다는 것이다.
  return -1;
}

console.log(binarySearch([1, 2, 5, 6, 7, 8, 11, 15, 21, 28], 5));
