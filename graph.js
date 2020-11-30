// Create a graph.

class Graph {
    constructor() {
        this.adjacentList = {};
        this.numberOfVertices = 0;
    };

    addVertex(vertex) {
        this.adjacentList[vertex] = [];
        this.numberOfVertices++;

        return vertex;
    };

    addEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);

        return [vertex1, vertex2];
    };

    showConnections() {
        const allVertices = Object.keys(this.adjacentList);

        for (let vertex of allVertices) { 
            let connections = '';
            let vertexConnections = this.adjacentList[vertex]; 

            for (let vertexConnection of vertexConnections) {
                connections += vertexConnection + ' ';
            };

            console.log(vertex + '-->' + connections); 
        };
    };
};

// Tests

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5