// list representation
class DFSG {
    private V;
    private adj: any[];
    private stringOut: string;
    // constructor
    constructor(v: number) {
        this.V = v;
        this.adj = new Array(v);
        this.stringOut = "";
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }

    //Function to add an edge into the graph
    addEdge(v: number, w: any) {
        // Add w to v's list
        this.adj[v].push(w);
    }

    // A function used by DFS
    DFSUtil(v: number, visited: Array<Boolean>) {
        // Mark the current node as visited and print it
        visited[v] = true;
        console.log(v + " ");
        
        // Recur for all the vertices adjacent to this
        // vertex
        for (let i of this.adj) {
            let n = i;
            if (!visited[n]) {
                this.DFSUtil(n, visited);
                this.stringOut+= "[ "+ n +" "+ visited[v] + ' ]';
            }
        }
    }

    // The function to do DFS traversal.
    // It uses recursive
    // DFSUtil()

    DFS(v: number)
    {
        // Mark all the vertices as
        // not visited (set as 
        // false by default in java)
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++){
            visited[i] = false;
        }

        // Call the recursive helper
        // function to print DFS
        // traversal
        this.DFSUtil(v, visited);
    }

    strnO() {
        return this.stringOut;
    }
}



// This code is contributed by avanitrachhadiya2155

export {DFSG}