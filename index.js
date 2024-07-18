// Utility function to check if input is a collection (array or object)
function isCollection(collection) {
    return Array.isArray(collection) || typeof collection === 'object';
}

// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        let values = Object.values(collection);
        let keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], keys[i], collection);
        }
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    let result = [];
    myEach(collection, (value, key, collection) => {
        result.push(callback(value, key, collection));
    });
    return result;
}

// myReduce function
function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : collection[0];
    let startIndex = acc !== undefined ? 0 : 1;
    myEach(collection.slice(startIndex), (value, key, collection) => {
        accumulator = callback(accumulator, value, collection);
    });
    return accumulator;
}

// myFind function
function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, collection) => {
        if (predicate(value)) {
            result = value;
            return result;
        }
    });
    return result;
}

// myFilter function
function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, (value, key, collection) => {
        if (predicate(value)) {
            result.push(value);
        }
    });
    return result;
}

// mySize function
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
    return 0;
}

// myFirst function
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast function
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
}

// myKeys function
function myKeys(object) {
    return Object.keys(object);
}

// myValues function
function myValues(object) {
    return Object.values(object);
}
