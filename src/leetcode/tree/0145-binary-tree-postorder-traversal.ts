import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 145. 二叉树的后序遍历
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 */
export default function BinaryTreePostorderTraversal() {
  const root = TreeUtils.buildBinaryTree([1, 2, 3, null, 4, 6, 7]);
  const result = postorderTraversal2(root);
  console.log(result);
}

BinaryTreePostorderTraversal();

/**
 * 递归
 * @param {(TreeNode | null)} root
 * @return {number[]}  {number[]}
 */
function postorderTraversal1(root: TreeNode | null): number[] {
  const result: number[] = [];
  postorder(root, result);
  return result;
}

function postorder(root: TreeNode | null, result: number[]) {
  if (root !== null) {
    // 反正就是这里的顺序
    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.val);
  }
}

/**
 * 借助栈迭代
 * @param {(TreeNode | null)} root
 * @return {number[]}  {number[]}
 */
function postorderTraversal2(root: TreeNode | null): number[] {
  const result: number[] = [];
  // 根节点一定不为null
  const stack: TreeNode[] = [root as TreeNode];
  while (stack.length !== 0 || root !== null) {
    root = stack.pop() || null;
    while (root !== null) {
      result.push(root.val);
      if (root.left !== null) {
        stack.push(root.left);
      }
      root = root.right;
    }
  }
  return result.reverse();
}
