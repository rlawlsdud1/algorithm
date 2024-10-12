// 2. 트럼프 카드 정리하기 (using bubblesort)
// - 카드 더미 배열(cards)을 A,2,3,4,5,6,7,8,9,10,J,Q,K 순으로 카드를 정렬
// - 순서는 하트, 다이아몬드, 클로버, 스페이드 순서로 정렬
// - 중단 없이 완료되면 하트 A~K, 다이아몬드 A~K, 클로버 A~K, 스페이드 A~K 가
//   순서대로 담긴 배열이 되어야 한다.

let cards = [
  ["Diamond", 3],
  ["Heart", "A"],
  ["Clover", "K"],
  ["Spade", 7],
];

// cards의 각 원소에 대해 점수로 변환하는 함수
function convertCardToPoint(card) {
  // A,J,Q,K 를 숫자로 치환하자
  const chartoNum = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13,
  };

  // 하트 A~K, 다이아몬드 A~K, 클로버 A~K, 스페이드 A~K
  // 하 13개, 다 13개, 클 13개, 스 13개 순서로 있어야 한다.
  // ex) 하트 K보다 다이아몬드 A가 나중에 와야한다. 따라서
  //     따라서 다이아몬드 A는 적어도 14보다 크면 된다.
  const additionalPoint = {
    Heart: 0,
    Diamond: 13,
    Clover: 13 * 2,
    Spade: 13 * 3,
  };

  return (
    additionalPoint[card[0]] +
    (typeof card[1] === "number" ? card[1] : chartoNum[card[1]])
  );
}

function bubbleSort2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (convertCardToPoint(array[j - 1]) > convertCardToPoint(array[j])) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort2(cards));
