class Graph {
    // constructor
    private V: number;
    private adj = Array();
    constructor(v: number) {
        this.V = v;
        this.adj = new Array(v);
    }

    // Function to add an edge into the graph
    addEdge(v: number, w: number) {
        this.adj[v].push(w);
    }

    // Prints BFS traversal from a given source(s)
    BFS(s: number) {
        // Mark all the vertices as not visited(By default
        // set as false)
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++) {
            visited[i] = false;
            // Create a queue for BFS
            let queue = [];
            // Mark the current node as visited and enqueue it

            visited[s] = true;
            queue.push(s);
            while (queue.length > 0) {

                // Dequeue a vertex from queue and print it
                s = queue[0];
                console.log('====================================');
                console.log(s + " ");
                console.log('====================================');
                queue.shift();

                // Get all adjacent vertices of the dequeued
                // vertex s. 
                // If an adjacent has not been visited,
                // then mark it visited and enqueue it
                this.adj[s].forEach((adjacent: any) => {
                    if (!visited[adjacent]) {
                        visited[adjacent] = true;
                        queue.push(adjacent);
                    }
                });
            }
        }
    }
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Following is Breadth First Traversal " +
    "(starting from vertex 0) ");

g.BFS(0);

// This code is contributed by Aman Kumar.