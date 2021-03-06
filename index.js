const _ = require('lodash');

const inputArray = [1, 5, 6, 2, 3, 2, 5, 1];
const elementToRemove = 10;

// // SOLUTION 1 - filter method. Removes all occurences of the element
// const resultingArray = inputArray.filter(el => el !== elementToRemove);
// console.log(resultingArray);
// console.log(inputArray);

// // SOLUTION 2 - slice and findIndex. Removes only first occurence
// const index = inputArray.findIndex(el => el === elementToRemove);
// const resultingArray = index > -1 
//     ? [...inputArray.slice(0, index), ...inputArray.slice(index + 1)]
//     : [...inputArray];
// console.log(resultingArray);
// console.log(inputArray);


// // SOLUTION 3 - lodash remove method. Without clone it mutates input array
// const resultingArray = _.remove(_.clone(inputArray), el => el !== elementToRemove);
// console.log(resultingArray);
// console.log(inputArray);



