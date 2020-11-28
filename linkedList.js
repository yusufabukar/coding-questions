// Create a linked list.

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    };
};

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    };

    getListValues() {
        let listValues = [];
        let currentNode = this.head;

        while (currentNode != null) {
            listValues.push(currentNode.value);
            currentNode = currentNode.next;
        };

        return listValues;
    };

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this.head;
    };

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.tail;
    };

    traverse(index) {
        let currentNode = this.head;
        let currentNodeIndex = 0;

        if (index === 0) {return currentNode};

        do {
            currentNode = currentNode.next;
            currentNodeIndex++;
        } while (currentNodeIndex < index);

        return currentNode;
    };

    insert(value, index) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        };

        let leaderNode = this.traverse(index - 1);

        const newNode = new Node(value);
        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
        this.length++;

        return newNode;
    };

    delete(index) {
        const leaderNode = this.traverse(index - 1);
        const unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        this.length--;

        return leaderNode;
    };

    reverse() {
        if (this.length === 1) {
            return this.head;
        };

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        };

        this.head.next = null;
        this.head = first;

        return this;
    };
};

class DoublyNode {
    constructor(value) {
        this.value = value,
        this.prev = null,
        this.next = null
    };
};

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            prev: null,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    };

    getListValues() {
        let listValues = [];
        let currentNode = this.head;

        while (currentNode != null) {
            listValues.push(currentNode.value);
            currentNode = currentNode.next;
        };

        return listValues;
    };

    prepend(value) {
        const newNode = new DoublyNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this.head;
    };

    append(value) {
        const newNode = new DoublyNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.tail;
    };

    traverse(index) {
        let currentNode = this.head;
        let currentNodeIndex = 0;

        if (index === 0) {return currentNode};

        do {
            currentNode = currentNode.next;
            currentNodeIndex++;
        } while (currentNodeIndex < index);

        return currentNode;
    };

    insert(value, index) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        };

        let leaderNode = this.traverse(index - 1);
        let followerNode = leaderNode.next;

        const newNode = new DoublyNode(value);
        newNode.prev = leaderNode;
        newNode.next = followerNode;
        leaderNode.next = newNode;
        followerNode.prev = newNode;
        this.length++;

        return newNode;
    };

    delete(index) {
        const leaderNode = this.traverse(index - 1);
        const unwantedNode = leaderNode.next;
        const followerNode = unwantedNode.next;
        leaderNode.next = followerNode;
        this.length--;

        return leaderNode;
    };
};

// Tests

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(99, 2);
myLinkedList.delete(2);
myLinkedList.reverse()
myLinkedList.getListValues();

const myLinkedList2 = new DoublyLinkedList(10);
myLinkedList2.prepend(1);
myLinkedList2.append(5);
myLinkedList2.append(16);
myLinkedList2.insert(99, 2);
myLinkedList2.delete(2);
myLinkedList2.getListValues();