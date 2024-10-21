function generateSubsets(nums) {
  const results = []; // 모든 부분 집합을 저장할 배열

  function DFS(start, currentSubset) {
    results.push([...currentSubset]); // 현재 부분 집합을 결과에 추가

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]); // 현재 숫자를 부분 집합에 추가
      DFS(i + 1, currentSubset); // 다음 숫자로 DFS 호출
      currentSubset.pop(); // 백트래킹: 마지막 숫자 제거
    }
  }

  DFS(0, []); // 초기 DFS 호출
  return results; // 결과 반환
}

const subsets = generateSubsets([1, 2]);
console.log(subsets);
