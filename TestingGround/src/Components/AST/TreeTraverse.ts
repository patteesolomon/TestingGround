import { TreeNode, TraverseTree } from './TreeNode';
import { AbstractSyntaxTree } from './AbstractSyntaxTree';

class TreeTraverse {
    private asts: AbstractSyntaxTree;
    private i = 0;
    constructor(AST: AbstractSyntaxTree) {
        this.asts = AST;
    }

    traverse(ASTparam: TreeNode) {
        // this.asts = ASTparam.val;

        // this.asts.addNode(`Added ${ASTparam}`, this.i, new TreeNode(this.asts.val,this.asts.left,this.asts.right));
        ++this.i;
        if (!ASTparam.left && !ASTparam.right) {
            return this.asts;
        }
        else if (ASTparam.left) {
            this.asts.addNode(`Added ${ASTparam.type}`, this.i, ASTparam.left)
        }
        else if (ASTparam.right) {
            this.asts.addNode(`Added ${ASTparam.type}`, this.i, ASTparam.right)
        }

    }
}

// De-complicate this down to a simpler tree traverse
// function

// const AST = new AbstractSyntaxTree();
// const TreeNode1 = new TreeNode(1);
// TreeNode1.left = new TreeNode(2);
// TreeNode1.right = new TreeNode(3);

// AST.addNode('Recursion', 'Recursion base case reached');


export default TreeTraverse