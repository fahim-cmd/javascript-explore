const ages  = [12, 34, 64, 68, 46];
const ages2 = [35, 57, 67, 34, 57];
const ages3 = [45, 23, 35, 45, 23];

const result = ages.concat(ages2).concat([5]).concat(ages3);

const result2 = [...ages, ...ages2, 5, 5555, ...ages3]; // es6 shortcut style 
// console.log(result2);

const businessman = 344;
const minister = 556;
const shochib = 444;
const highestAmount = Math.max(businessman, minister, shochib);

const tkPoisa =[999, 344, 556, 444, 888];
const maximum = Math.max(...tkPoisa);

console.log(maximum);