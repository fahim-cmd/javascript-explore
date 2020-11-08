// function fibonacchi (n){
//     if( n == 0){
//         return 0;
//     }
//     if( n == 1){
//         return 1;
//     }
//     else{
//         return fibonacchi( n - 1)+ fibonacchi( n - 2);
//     }    
// }
// var result = fibonacchi( 10);
// console.log(result);

//  fibonacci series recursive way: 

function fibonacci(n){
    if( n == 0){
        return [ 0];
    }
    if( n == 1){
        return [ 0, 1];
    }
    else{
        var fibo = fibonacci( n-1 );
        var totalFibo = fibo[ n-1 ] + fibo [ n-2 ];
        fibo.push(totalFibo);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);

