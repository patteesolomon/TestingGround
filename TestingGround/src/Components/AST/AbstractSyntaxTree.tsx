import { TreeNode } from "./TreeNode";

class AbstractSyntaxTree {
// Build an AST for recursion
    // Add a node to the AST
    addNode(typer: string, value: number, newNode?: TreeNode) {
        let noded = new TreeNode();
        if (!newNode || undefined) {
            noded.val = value;
            noded.type = typer;
            noded.left = noded;
            noded.right = noded;
        }
        else if (newNode.val && !newNode.left && newNode.right) {
            newNode.val == value + 1;
            newNode.left = noded;
        }
        else if (newNode.val && !newNode.right && newNode.left) {
            newNode.val == value + 1;
            newNode.right = noded;
        }
        else if (newNode.val && newNode.left && newNode.right) {
            this.addNode(typer, value, newNode.left);
        }
        else if (newNode.val && newNode.right && newNode.left) {
            this.addNode(typer, value, newNode.right);
        }
    }
}

export {AbstractSyntaxTree};