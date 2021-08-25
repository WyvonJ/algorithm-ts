import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 94. 二叉树的中序遍历
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */
export default function BinaryTreeInorderTraversal() {
  const root = TreeUtils.buildBinaryTree([1, 2, 3, null, 4, 5, 6]);
  const result1 = inorderTraversal1(root);
  const result2 = inorderTraversal2(root);
  // const result2 =
  console.log(result1);
  console.log(result2);
}

BinaryTreeInorderTraversal();

/**
 * 递归中序遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function inorderTraversal1(root: TreeNode | null): number[] {
  const result: number[] = [];
  inorder(root, result);
  return result;
}

function inorder(root: TreeNode | null, result: number[]) {
  if (root !== null) {
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
  }
}

/**
 * 迭代法遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function inorderTraversal2(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [];
  // 显式地模拟出来
  while (root !== null) {
    if (root.left !== null) {
      stack.push(root.left);
      root = root.left;
    } else {
      let node = stack.pop() as TreeNode;
      result.push(node?.val);
      root = node?.right || null;
    }
  }
  return result;
}
