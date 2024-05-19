
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    type: any;
    height: number | undefined;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function TraverseTree(node: TreeNode | null, result: number[] = []): number[] {
    if (node !== null && node.val > 0) {
        TraverseTree(node.left, result);
        result.push(node.val - 1);
        TraverseTree(node.right, result);
    }
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(TraverseTree(root)); // Output: [4, 2, 5, 1, 3]

export {TreeNode, TraverseTree}