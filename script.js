const numbers = new Array(1, 2, 34, 5, 5, 6, 7, 78, 8, 9, 5, 4, 6, 5, 5, 7, 56, 6, 4, 6, 45, 4577, 89, 999, 8, 99, 89)
const bigValue = function (el, index) {
    if (el > 5) {
        // console.log('on index ' + index + ' value ' + el)
    }
}
// filter array and return filtered array
const filtred = numbers.filter(bigValue);


// simple index value of any value in array 
const checkIndex = numbers.indexOf(5);
// index value of any value in array in a praticular Range 

const checkIndexWithRange = numbers.indexOf(5, 7);

console.log(checkIndex)

// join all elemet as like a string and in prantises we will add sperator if we want 

const joinArray = numbers.join('-');

console.log(joinArray)

//lastindexOf 

const lastIndex = numbers.lastIndexOf(9);

console.log(lastIndex)


//reduce

const total = numbers.reduce((a, b) => {
    return a + b
});

console.log(total)

//slice will return a piece of array from full array based on provided parameters

const slicedArray = numbers.slice(3, 7);

console.log(slicedArray);

//some method will return true/false 

const someArray = numbers.some(el => {
    return el > 400
})
console.log(someArray)

const toString = numbers.toString();

console.log(toString);


//map will return a new array by appling the specify functonality of given fucntion 

const maped = numbers.map((a, ind) => {
    return a * ind
});

console.log(maped);


