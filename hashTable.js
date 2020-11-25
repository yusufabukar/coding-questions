// Create a hash table data structure.

// My Solution
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    };

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        };

        return hash;
    };

    set(key, value) {
        const address = this._hash(key);

        if (!this.data[address]) { // Check if address is empty
            this.data[address] = [];
        };
        this.data[address].push([key, value]) // Prevents overwriting, as overflows are stored in arrays at same address.

        return address;
    };

    get(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        
        if (bucket) {
            for (let keyValuePair of bucket) {
                if (keyValuePair[0] === key) {
                    return keyValuePair[1];
                };
            };
        }
        
        return null;
    };

    keys() {
        const buckets = this.data;
        let keys = [];

        for (let keyValuePairs of buckets) {
            if (!keyValuePairs) {continue};

            for (let keyValuePair of keyValuePairs) {
                keys.push(keyValuePair[0])
            };
        };

        return keys;
    };
};

// Tests

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 19);
myHashTable.get('grapes');

myHashTable.set('pomegranates', 2);
myHashTable.get('pomegranates');

myHashTable.set('oranges', 4);
myHashTable.get('oranges');

myHashTable.keys()
