// Depth-First Search
// 한쪽으로 깊게 뚫는게 깊이 우선 탐색

// 그래프 데이터에서 점을 정점, 선을 간선이라 부른다

// 단점
// 1. 깊이가 엄청 깊어지면, 메모리 비용을 예측하기 어렵다.
//  -> 앞서 설명한 것처럼 깊이가 깊어질수록 함수가 하나씩 쌓이는 구조이다.
//     이 때문에 깊이가 엄청 깊어진다면 스택 메모리가 지나치게 커질 수 있다.
// 2. 최단 경로를 알 수 없다.

// 1 은 벽, 0 은 비어있는 공간
let maze = [
  ["S", 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, "E"],
  [1, 1, 1, 0, 1],
];

// position의 최초는 [0,0] <- start point를 정해놨잖아
function dfs(maze, position = [0, 0], path = []) {
  let [x, y] = position;
  // 이 경우에는 end point에 도달한 것
  // 지나온 길과 end point의 좌표를 담은 배열을 반환
  if (maze[x][y] === "E") return [...path, position];

  // 상하좌우로만 이동할 수 있다고 가정
  let directions = [
    [0, 1], // 하
    [0, -1], // 상
    [1, 0], // 우
    [-1, 0], // 좌
  ];

  for (let [dx, dy] of directions) {
    let newX = x + dx,
      newY = y + dy;
    if (
      // 미로 밖으로 나가는 것을 방지
      newX >= 0 &&
      newX < maze.length &&
      newY >= 0 &&
      newY < maze[0].length &&
      // 0인 곳 또는 end point인 곳 만을 탐색
      (maze[newX][newY] === 0 || maze[newX][newY] === "E")
    ) {
      maze[x][y] = 1; // 방문한 곳을 표시 + 벽처럼 처리
      let result = dfs(maze, [newX, newY], [...path, position]);
      // 'E'에 도달해서 유요한 경로가 반환될 때 여기 if문을 탄다
      if (result) return result;
    }
  }

  // 더 이상 갈 수 있는 곳이 없을 때
  return null;
}

console.log(dfs(maze));
