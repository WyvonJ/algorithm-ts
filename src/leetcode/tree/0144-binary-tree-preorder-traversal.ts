import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */
function BinaryTreePreorderTraversal() {
  const root = TreeUtils.buildBinaryTree([1, 2, 3])
  console.log(root)
}

BinaryTreePreorderTraversal();


/**
 * 
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal(root: TreeNode | null): number[] {
  return [];
}