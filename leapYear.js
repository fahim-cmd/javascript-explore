function leapYear ( year){
    const checkYear = year % 4 && year % 100 && year % 400;
    if( checkYear == 0){
        return true;
    }
    else{
        return false;
    }
}

const result = leapYear( 2008);
console.log(result);