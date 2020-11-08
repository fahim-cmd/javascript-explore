var names = [ " kamal", " jamal", " karim", " kamal", " karim", " fahim", " kamal", " jamal"];
var unichName = [];

for( var i = 0; i < names.length; i++){
    var element = names[i];
    var result = unichName.indexOf(element);

    if(result == -1){
        unichName.push(element);
    }
}

console.log(unichName);