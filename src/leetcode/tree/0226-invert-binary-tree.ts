import TreeNode from './defs/tree-node';
import TreeUtils from './defs/tree-utils';

/**
 * 226. 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/
 */
export default function InvertBinaryTree() {
  const tree1 = TreeUtils.buildBinaryTree([4, 2, 7, 1, 3, 6, 9]);
  console.log(invertTree1(tree1));
  console.log(invertTree2(tree1));
}

// InvertBinaryTree();

/**
 * 递归将每层节点翻转
 * 深度优先
 * @param {(TreeNode | null)} root
 * @return {(TreeNode | null)}
 */
function invertTree1(root: TreeNode | null): TreeNode | null {
  if (root !== null) {
    // 交换
    let temp = root.left;
    root.left = (root.right);
    root.right = temp;
    // 交换后对子节点递归处理
    invertTree1(root.left);
    invertTree1(root.right);
  }
  return root;
}

/**
 * 借助队列的数据结构
 * 广度优先
 * @param {(TreeNode | null)} root
 * @return {(TreeNode | null)}
 */
function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const queue = [root];
  while (queue.length > 0) {
    const head = queue.shift() as TreeNode;
    // 对该节点进行左右交换
    const temp = head.left;
    head.left = head.right;
    head.right = temp;

    if (head.left !== null) {
      queue.push(head.left)
    }
    if (head.right !== null) {
      queue.push(head.right);
    }
  }
  return root;
}
