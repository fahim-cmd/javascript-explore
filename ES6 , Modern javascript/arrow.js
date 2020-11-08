//==========================================Simple way to declare a function expression
// function doubleIt (num){
//     return num * 2;
// }

 //=======================================function declaration by variable
//  const doubleIt = function (num){
//      return num * 2;
//  }


//===============================ES6 . arrow function==========
// -------------jodi ekta perameter hoe taile  :-

// const doubleIt = num => num * 2;

// const add = ( x, y) => x + y;

// const single = () => 4;

// const result = single();

const DoMath = ( x, y) => {
    const sum = x + y;
    const minus = x - y;
    const result = sum + minus;
    return result;
}
const result2 = DoMath(2, 3);

console.log(result2);

// console.log(result);