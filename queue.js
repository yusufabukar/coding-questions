// Create a queue.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    peek() {
        return this.first;
    };

    enqueue(value) {
        const queuer = new Node(value);

        if (this.length === 0) {
            this.first = queuer;
            this.last = queuer;
        } else {
            this.last.next = queuer;
            this.last = queuer;
        };

        this.length++;

        return this;
    };

    dequeue() {
        if (this.length === 0) {
            return null;
        };
        if (this.length === 1) {
            this.last = null;
        };

        const queueLeaver = this.first;
        this.first = queueLeaver.next;
        this.length--;

        return queueLeaver;
    };

    isEmpty() {
        return !Boolean(this.length);
    };
};

// Tests

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.enqueue('Pawel');
myQueue.isEmpty();
myQueue.dequeue();