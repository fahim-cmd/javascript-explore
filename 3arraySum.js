
function getArraySum(numbers){
    var sum = 0;
    for( var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [ 34, 35, 56, 767, 45, 68];
var result = getArraySum( numbers);
console.log( " total value of array :", result);

var newNumbers = getArraySum([ 343, 64, 67, 4, 243, 56, 76, 9] ) ;
console.log( " total value of new number array :", newNumbers);

