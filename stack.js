// Create stacks using a linked list and array respectively.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    };

    push(value) {
        const plate = new Node(value);

        if (this.length === 0) {
            this.top = plate;
            this.bottom = plate;
        } else {
            const oldTop = this.top;
            this.top = plate;
            plate.next = oldTop;
        };

        this.length++;

        return plate;
    };

    pop() {
        if (!this.top) {
            return null;
        };
        if (this.length === 1) {
            this.bottom = null;
        };

        const oldTop = this.top;
        this.top = this.top.next;
        this.length--;
    
        return this;
    };

    peek() {
        return this.top;
    };

    isEmpty() {
        return !Boolean(this.length);
    };
};

class Stack2 {
    constructor() {
        this.data = [];
    };

    push(value) {
        this.data.push(value)

        return this;
    };

    pop() {
        this.data.pop();
    
        return this;
    };

    peek() {
        return this.data[this.data.length - 1];
    };

    isEmpty() {
        return this.data.length === 0 ? true : false;
    };
};

// Tests

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.isEmpty();
myStack.peek();
myStack.pop();

const myStack2 = new Stack2();
myStack2.push('Google');
myStack2.push('Udemy');
myStack2.push('Discord');
myStack2.isEmpty();
myStack2.peek();
myStack2.pop();