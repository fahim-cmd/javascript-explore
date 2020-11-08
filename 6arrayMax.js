// var friends = [ 34, 56, 67, 87, 33, 45, 99]
// var max = friends[0];

// for( var i = 0; i <friends.length; i++){
//     var element = friends[i];
    
//     if(element > max){
//         max = element;
//     }
// }
// console.log( max);




function tinyFriend (arr){
    var  longestString = arr[0];
    for ( var i = 0 ; i < arr.length ; i++){
        var  updatedstrng = arr[i]

        if( updatedstrng < longestString){
            longestString = updatedstrng;
        }
    }
    return longestString;
}
var friends =[ "sakib", "mashrafi bin murtaza", "Mahmudul hasan mahmudullah vai","tamim iqbal", "mushfiq","rubel"];
var result = tinyFriend(friends);
console.log(result);