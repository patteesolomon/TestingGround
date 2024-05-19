import { TreeNode } from '../AST/TreeNode';

class BST {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }

        if (value === node.val) {
            return true;
        } else if (value < node.val) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    delete(value: number) {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.val) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.val) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Case 1: No child or only one child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 2: Two children
            const minValue = this.findMinValue(node.right);
            node.val = minValue;
            node.right = this.deleteNode(node.right, minValue);
        }

        return node;
    }

    private findMinValue(node: TreeNode): number {
        let minValue = node.val;
        while (node.left !== null) {
            minValue = node.left.val;
            node = node.left;
        }
        return minValue;
    }

    toArray(): number[] {
        const result: number[] = [];
        this.toArrayHelper(this.root, result);
        return result;
    }

    private toArrayHelper(node: TreeNode | null, result: number[]) {
        if (node === null) {
            return;
        }

        this.toArrayHelper(node.left, result);
        result.push(node.val);
        this.toArrayHelper(node.right, result);
    }
    // noice
}

export default BST;
