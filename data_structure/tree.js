// 선형 자료구조 : 노드 / 원소의 앞 ~ 뒤 관계가 1:1 인 구조
// ex) 배열, 연결리스트, 스택, 큐

// tree 자료 구조 : 노드의 앞 ~ 뒤 관계가 1 : N 또는 N : N
// 비선형 계층적 구조
// 하나의 tree에는 하나의 root 노드가 존재한다.
// 노드와 노드 사이를 연결해주는 부분을 edge(간선)라 부른다
// 하위 노드를 child node라 한다
// 그 하위의 자식 노드들도 본인들의 자식 노드를 가질 수 있다
// 가장 하위에 있는 노드를 leaf라 한다
// 같은 부모를 가지고 있는 노드들을 sibiling(형제) 라고 한다
// root 포함 모든 node의 수를 size라 한다
// node에서 root까지 거리를 depth라 한다(root node의 경우 0)
// node depth의 maximum을 height라 한다

// 트리 구현하기
// - 각 node는 하나의 객체로 표현된다
// - node에 데이터와 자식노드들을 저장할 수 있다.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = []; // 자식 노드들의 참조정보를 저장하는 공간
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

// binary tree(이진 트리)
// 각 노드가 0에서 최대 2개의 child node를 갖는다

// binary search tree(이진 탐색 트리)
// binary tree는 노드의 값, 데이터 크기와 상관없이 구성
// binary search tree
//  1. 왼쪽 자식노드 값 < 부모 노드 값
//  2. 부모 노드 값 < 오른쪽 자식 노드 값

// tree traversal(트리 순회)
// 1) in-order traversal(중위 순회)
//    left -> visit -> right
//    dfs 이용해서 탐색
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

// 2) pre-order traversal(전위 순회)
//    visit -> left -> right
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// 3) post-order traversal(후위 순회)
//    left -> right -> visit
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}
