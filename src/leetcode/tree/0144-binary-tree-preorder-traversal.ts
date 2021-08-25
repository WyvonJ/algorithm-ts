import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */
function BinaryTreePreorderTraversal() {
  const root1 = TreeUtils.buildBinaryTree([1, 2, 3, null, 4, 6, 7]);
  const root2 = TreeUtils.buildBinaryTree([1, 2, 3, null, 4, 6, 7]);
  const result1 = preorderTraversal2(root1);
  const result2 = iterate(root2);
  console.log(result1);
  console.log(result2);
}

// BinaryTreePreorderTraversal();

/**
 * 递归遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal1(root: TreeNode | null): number[] {
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
 * 迭代法
 * @param {(TreeNode | null)} root
 */
function iterate(root: TreeNode | null) {
  if (root === null) return [];
  const stack: TreeNode[] = [root];
  const result: number[] = [];
  while (stack.length > 0) {
    root = stack.pop() as TreeNode;
    result.push(root.val);
    if (root.right !== null) stack.push(root.right);
    while (root.left !== null) {
      root = root.left;
      if (root.right !== null) stack.push(root.right);
      result.push(root.val);
    }
  }
  return result;
}

/**
 * 迭代遍历
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal2(root: TreeNode | null): number[] {
  if (root === null) return [];
  // 存放结果
  const result: Array<number> = [];
  // 1. 手动构造栈
  const stack: Array<TreeNode> = [root];
  // 2. 只要栈里面不为空
  while (stack.length > 0) {
    // 3. 取出一个元素
    root = stack.pop() || null;
    while (root !== null) {
      // 4. 加入它的值
      result.push(root.val);
      // 5. 将右节点放入栈里
      if (root.right !== null) {
        stack.push(root.right);
      }
      // 6. 指针移到当前节点的左子树节点
      root = root.left;
    }
  }
  return result;
}
