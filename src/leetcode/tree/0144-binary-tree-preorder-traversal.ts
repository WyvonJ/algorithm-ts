import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */
function BinaryTreePreorderTraversal() {
  const root = TreeUtils.buildBinaryTree([1, 2, 3, null, 4, 6, 7]);
  const result = preorderTraversal2(root);
  console.log(result)
}

// BinaryTreePreorderTraversal();


/**
 * 递归遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal(root: TreeNode | null): number[] {
  const result: Array<number> = [];
  preorder(root, result);
  return result;
}

function preorder(root: TreeNode | null, result: Array<number>) {
  // 按照根左右的顺序加入到结果数组中
  if (root !== null) {
    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
  }
}

/**
 * 迭代遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal2(root: TreeNode | null): number[] {
  // 存放结果
  const result: Array<number> = [];
  // 手动构造栈
  const stack: Array<TreeNode> = [];
  // 根节点一定不为null
  stack.push(root as TreeNode);
  while (stack.length > 0 || root !== null) {
    root = stack.pop() || null;
    while (root !== null) {
      result.push(root.val);
      if (root.right !== null) {
        stack.push(root.right);
      }
      root = root.left;
    }
  }
  return result;
}