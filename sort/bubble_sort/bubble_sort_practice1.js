// 1. 다음과 같은 점수와 이름을 가지고 있는 객체 배열이 존재한다.
// 시험 점수를 정렬하는 코드를 작성
let scores = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 88 },
  { name: "혜진", score: 97 },
  { name: "진수", score: 90 },
];

function bubbleSort1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1].score > array[j].score) {
        const temp = array[j].score;
        array[j].score = array[j - 1].score;
        array[j - 1].score = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort1(scores));
