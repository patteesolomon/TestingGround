import { TreeNode as Node } from "../AST/TreeNode";

class AVLTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }

    getHeight(node: Node | null): number {
        if (node === null) {
            return 0;
        }
        return node.height ?? 0;
    }

    getBalanceFactor(node: Node | null): number {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(z: Node): Node {
        const y = z.left!;
        const T3 = y.right;

        y.right = z;
        z.left = T3;

        z.height = Math.max(this.getHeight(z.left), this.getHeight(z.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    rotateLeft(z: Node): Node {
        const y = z.right!;
        const T2 = y.left;

        y.left = z;
        z.right = T2;

        z.height = Math.max(this.getHeight(z.left), this.getHeight(z.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(root: Node | null, value: number): Node {
        if (root === null) {
            return new Node(value);
        }

        if (value < root.val) {
            root.left = this.insertNode(root.left, value);
        } else if (value > root.val) {
            root.right = this.insertNode(root.right, value);
        } else {
            // Duplicate values are not allowed in AVL tree
            return root;
        }

        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        const balanceFactor = this.getBalanceFactor(root);

        if (balanceFactor > 1 && value < root.left!.val) {
            return this.rotateRight(root);
        }

        if (balanceFactor < -1 && value > root.right!.val) {
            return this.rotateLeft(root);
        }

        if (balanceFactor > 1 && value > root.left!.val) {
            root.left = this.rotateLeft(root.left!);
            return this.rotateRight(root);
        }

        if (balanceFactor < -1 && value < root.right!.val) {
            root.right = this.rotateRight(root.right!);
            return this.rotateLeft(root);
        }

        return root;
    }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
