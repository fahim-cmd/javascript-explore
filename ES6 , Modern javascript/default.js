// default value provide in es6 
//jodi tumi perameter set korte vule jao , tahole sha default value ta k dhore nibe ,, r jodi perameter dao tahole sheta k dhore nibe

function add ( num1, num2 = 20){
    sum = num1 + num2;
    return sum;
}
const result = add (15, 5);
console.log(result);