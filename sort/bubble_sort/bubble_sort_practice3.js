// 3. 배달 앱의 추천 알고리즘
// 총주문 수, 평균 평점, 누적 '좋아요' 수, 사용자와의 거리(km)
// 위의 값에 가중치를 적당히 부여하여 총점이 가장 높은 순위부터 내림차순으로 정렬
// 점수가 높더라도 사용자와의 거리가 20km 이상 멀리 있는 곳이라면 추천 목록에서 제외

let restaurants = [
  {
    name: "음식점A",
    totalOrders: 300,
    avgRating: 4.5,
    likes: 200,
    distance: 5,
  },
  {
    name: "음식점B",
    totalOrders: 250,
    avgRating: 4.2,
    likes: 180,
    distance: 25,
  },
  {
    name: "음식점C",
    totalOrders: 400,
    avgRating: 4.7,
    likes: 250,
    distance: 15,
  },
  {
    name: "음식점D",
    totalOrders: 200,
    avgRating: 4.1,
    likes: 150,
    distance: 30,
  },
  {
    name: "음식점E",
    totalOrders: 350,
    avgRating: 4.4,
    likes: 220,
    distance: 10,
  },
];
const weights = { totalOrders: 0.2, avgRating: 0.3, likes: 0.2, distance: 0.3 };

// 주어진 배열의 각 원소에 대해 환산점수를 계산하는 함수를 먼저 만들어보자.
function convertedScore(restaurant) {
  if (restaurant.distance >= 20) return 0;
  const score =
    restaurant.totalOrders * weights.totalOrders +
    restaurant.avgRating * weights.avgRating +
    restaurant.likes * weights.likes +
    // 가까울수록 좋은거니까
    (20 - restaurant.distance) * weights.distance;

  return score;
}

// 만든 함수를 토대로 정렬을 해보자
function bubbleSort3(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      // 여기선 내림차순으로 정렬하라고 했으니 다음 원소가 더 크면 바꾸기
      if (convertedScore(array[j - 1]) < convertedScore(array[j])) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}

// 환산점수가 0인 애들을 제외해보자
const sortedArr = bubbleSort3(restaurants);
const i = sortedArr.findIndex((e) => convertedScore(e) === 0);
const answer = sortedArr.slice(0, i);

console.log(answer);
