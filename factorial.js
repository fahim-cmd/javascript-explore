function getFactorial(num){
        var factorial = 1;
    for( var i = 1; i <= num; i++){
        factorial = i * factorial;                   
    }
    return factorial;
}
var result = getFactorial( 10);
console.log(result);
