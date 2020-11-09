var tomCruse = 200;
function global (){
    var arnold = 100;
    console.log(arnold);
    function local(){
        let shakib = 300;
        return console.log(shakib + arnold + tomCruse);
    }

}
console.log(tomCruse);
// console.log(shakib + arnold + tomCruse);