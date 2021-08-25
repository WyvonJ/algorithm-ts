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

// BinaryTreePostorderTraversal();

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
 * 迭代法遍历
 * 与前序遍历思路一样, 只是先将右子树的值加进来
 * 最后反转整个数组
 * @param {(TreeNode | null)} root
 * @return {number[]}  {number[]}
 */
function postorderTraversal2(root: TreeNode | null): number[] {
  if(root === null) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    root = stack.pop() || null;
    while (root !== null) {
      result.push(root.val);
      // 将左节点放入
      if (root.left !== null) {
        stack.push(root.left);
      }
      // 遍历从右节点开始
      root = root.right;
    }
  }
  // 反转数组
  return result.reverse();
}
