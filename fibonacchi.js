// fibonacchi series ( this is iterative way ):  kono ektar songkha hobe tar ager 2ta songkhar jogfol;

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];

// fibo[n] = fibo[n-1] + fibo[n-2];
function fibonacchi (n){
    var fibo = [ 0, 1];
    for ( i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var result = fibonacchi(10);
console.log(result);