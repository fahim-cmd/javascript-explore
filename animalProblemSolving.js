
function amazonForest( distance){
    var animalCount = 0;

    if(distance <= 10 ){
        animalCount = distance * 50;        
    }

    else if( distance <= 20){
        var firstTenMile = 10 * 50;
        var currentDepth = distance - 10; 
        var secondTenMile =  currentDepth * 100;          
        animalCount = secondTenMile +  firstTenMile;
        //console.log(animalCount);
    }

    else if(distance > 20){
        var firstTenMile  = 10 * 50;
        var secondTenMile = 10 * 100;
        var currentDepth  = distance - 20;
        var thirdUnlimited= currentDepth * 300;
        animalCount = firstTenMile + secondTenMile + thirdUnlimited;
        //console.log(animalCount);
     }
     return animalCount;
}

console.log(amazonForest(12));
var result = amazonForest( 22);
console.log(result);
