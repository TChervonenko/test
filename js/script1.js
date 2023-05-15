"use strict";

// функция indexOf
function indexOf(arr, value, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// функция lastIndexOf
function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// функция find
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
}

// функция findIndex
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// функция includes
function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// функция every
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

// функция some
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
