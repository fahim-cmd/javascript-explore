var a = 4;
var b = 8;

//console.log( " before swap a =", a, "b =", b);

var swap = 4;
a = b;
b = swap;
//console.log( " after swap a =", a, ",b =", b);

// Another way -----------

var x = 10;
var y = 20;

x = x + y;
y = x - y;
x = x - y;

//console.log( " after swap x =", x, ",y =", y);

//this is javascript special way to swap---------

var m = 100;
var n = 200;

[ m, n] = [ n, m];
console.log( " after swap m =", m, ",n =", n);