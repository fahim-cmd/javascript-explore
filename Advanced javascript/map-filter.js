const numbers = [ 2, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);        
// }
// console.log(output);

// =============================================================

// function square (element){
//     return element * element;
// }

// let square = element => element * element;

// let square = x => x * x;

// const result = numbers.map(square);
// console.log(result);

// ========  || =========  *map er moddhe 3 ta perameter neoa jae " element, index, array"

// const result1 = numbers.map( function(element){
//     return element * element;
// })
        //   ||
// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter( x => x < 5);

const isThere = numbers.find ( x => x < 5);

// map and filter ekta array dibe r find ekta element dibe;
console.log(isThere);