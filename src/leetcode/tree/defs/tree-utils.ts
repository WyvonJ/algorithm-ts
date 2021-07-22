import TreeNode from './tree-node';

/**
 * 二叉树工具类
 * @export
 * @class TreeUtils
 */
export default class TreeUtils {
  /**
   * 根据数组构建二叉树
   * @static
   * @param {(Array<number>)} nums
   * @return {TreeNode}
   * @memberof TreeUtils
   */
  static buildBinaryTree(nums: Array<number | null>): TreeNode | null {
    if (nums.length === 0) {
      return null;
    }
    // 节点队列
    const nodeQueue: Array<TreeNode> = [];
    // 根节点
    const root = new TreeNode(nums[0] as number);
    // 加入根节点
    nodeQueue.push(root);
    let cur: TreeNode;
    // 记录当前行节点的数量（注意不一定是2的幂，而是上一行中非空节点的数量乘2）
    let lineNodeNum = 2;
    // 记录当前行中数字在数组中的开始位置
    let startIndex = 1;
    // 记录数组中剩余的元素的数量
    let restLength = nums.length - 1;

    while (restLength > 0) {
      // 从每一行开始, 遍历到这一行节点总数结束, 每次跳两个, 取左右两个节点
      for (let i = startIndex; i < startIndex + lineNodeNum; i = i + 2) {
        // 已经将所有数字遍历完, 返回root
        if (i === nums.length) return root;
        cur = nodeQueue.shift() as TreeNode;

        if (nums[i] !== null) {
          cur.left = new TreeNode(nums[i] as number);
          nodeQueue.push(cur.left);
        }

        if (i + 1 === nums.length) return root;
        if (nums[i + 1] !== null) {
          cur.right = new TreeNode(nums[i + 1] as number);
          nodeQueue.push(cur.right);
        }
      }
      startIndex += lineNodeNum;
      restLength -= lineNodeNum;
      lineNodeNum = nodeQueue.length * 2;
    }
    return root;
  }
}
