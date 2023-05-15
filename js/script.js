"use strict";

// функция, которая возвращает индекс первого вхождения элемента в массиве или -1, если элемент не найден
function indexOf(arr, searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// функция, которая возвращает индекс последнего вхождения элемента в массиве или -1, если элемент не найден
function lastIndexOf(arr, searchElement, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// функция, которая возвращает первый элемент в массиве, удовлетворяющий заданному условию или undefined, если такой элемент не найден
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

// функция, которая возвращает индекс первого элемента в массиве, удовлетворяющего заданному условию или -1, если такой элемент не найден
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// функция, которая возвращает true, если элемент присутствует в массиве, и false, если элемент отсутствует
function includes(arr, searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

// функция, которая возвращает true, если все элементы массива удовлетворяют заданному условию, и false, если хотя бы один элемент не удовлетворяет условию
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

// функция, которая возвращает true, если хотя бы один элемент массива удовлетворяет заданному условию, и false, если ни один элемент не удовлетворяет условию
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}


