function maxarray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function minarray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function lenghtarray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
    }   
    return count;
}

function lenghtstring(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

const arr1 = [3, 1, 4, 1, 5, 9];
console.log("Array:", arr1);
console.log("Max:", maxarray(arr1));
console.log("Min:", minarray(arr1));
console.log("Length:", lenghtarray(arr1));
const arr2 = [-7, -3, -2, -8, -1];
console.log("Array:", arr2);
console.log("Max:", maxarray(arr2));
console.log("Min:", minarray(arr2));
console.log("Length:", lenghtarray(arr2));
const str1 = "Hello, World!";
console.log("String:", str1);
console.log("Length:", lenghtstring(str1));
const str2 = "Desafio 3";
console.log("String:", str2);
console.log("Length:", lenghtstring(str2));