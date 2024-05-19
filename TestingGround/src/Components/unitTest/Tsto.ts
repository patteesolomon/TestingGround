// Removed unused import
import { describe } from 'mocha';
import { expect } from 'chai';

// const F = new TreeNode(3);

// traverseTree(F);
let N = 7; 
let Root = 1;
let adj = new Array(N + 1).fill(null).map(() => []);

function addEdge(x: any, y: any, arr: Array<any>) {
    arr[x].push(y);
    arr[y].push(x);
}
function printParents(node:any, arr:any, parent:any):void
{
    if (parent == 0) {
        console.log(`${node}->Root`);
    }
    else {
        console.log(`${node}->${parent}`);
    }
    for (let cur of arr[node]) {
        if (cur != parent) {
            printParents(cur, arr, node);
        }
    }
}
    
function printChildren(Root:any, arr:any)
{
    let q = [];
    q.push(Root);

    let vis = new Array(arr.length).fill(0);
    while (q.length > 0) {
        let node = q.shift();
        vis[node] = 1;
        console.log(`${node} -> `);
        for (let cur of arr[node])
            if (vis[cur] == 0) {
                console.log(cur + " ");
                q.push(cur);
            }
        console.log('\n');
    }
}

addEdge(1, 2, adj);
addEdge(1, 3, adj);
addEdge(1, 4, adj);
addEdge(2, 5, adj);
addEdge(2, 6, adj);
addEdge(4, 7, adj);

// Function to print the leaf nodes
function printLeafNodes(Root:any, arr:Array<any>)
{
    // Leaf nodes have only one edge and are not the root
    for (let i = 1; i < arr.length; i++)
        if (arr[i].length == 1 && i != Root)
            console.log(i + " ");
    console.log("\n");
}

// Function to print the degrees of each node
function printDegrees(Root:any, arr:Array<any>) {
    for (let i = 1; i < arr.length; i++) {
        console.log(`${i}: `);
        
        // Root has no parent, thus, its degree is equal to
        // the edges it is connected to
        if (i == Root)
            console.log(arr[i].length + "\n");
        else
            console.log(arr[i].length - 1 + "\n");
    }
}
// Driver code
// Printing the parents of each node
console.log("The parents of each node are:");
printParents(Root, adj, 0);

// // Printing the children of each node
// console.log("The children of each node are:");
// printChildren(Root, adj);

// // Printing the leaf nodes in the tree
// console.log("The leaf nodes of the tree are:");
// printLeafNodes(Root, adj);

// // Printing the degrees of each node
// console.log("The degrees of each node are:");
// printDegrees(Root, adj);

// This code is contributed by ruchikabaslas.
// https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/

describe("this Tree's time complexity", () =>
{
    describe('add several numbers'), () => {
    expect(printParents(Root, adj, parent)).to.equal(`The parents of each node are:
1->Root
2->1
5->2
6->2
3->1
4->1
7->4`)
    };
});


export default {printParents}