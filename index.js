const _ = require('lodash');

const inputArray = [1, 5, 6, 2, 3, 2, 5, 1];
const elementToReplace = 2;

// // SOLUTION 1 - filter method. Removes all occurences of the element
// const resultingArray = inputArray.filter(el => el !== elementToReplace);
// console.log(resultingArray);
// console.log(inputArray);

// // SOLUTION 2 - slice and findIndex. Removes only first occurence
// const index = inputArray.findIndex(el => el === elementToReplace);
// const resultingArray = [...inputArray.slice(0, index), ...inputArray.slice(index + 1)];
// console.log(resultingArray);

// // SOLUTION 3 - lodash remove method. Without clone it mutates input array
// const resultingArray = _.remove(_.clone(inputArray), el => el !== elementToReplace);
// console.log(resultingArray);
// console.log(inputArray);



