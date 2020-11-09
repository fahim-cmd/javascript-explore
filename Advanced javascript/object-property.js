const students = [
    { phone: 1, name: "pasha"},
    { phone: 4, name: "badsha"},
    { phone: 3, name: "khan"},
    { phone: 6, name: "kabir"}
]

// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     output.push(element);    
// }
// console.log(output);

const excessName = students.map( s => s.name);
const ids = students.map ( x => x.phone);

const bigger = students.filter( s => s.phone >3 );

const biggerOne = students.find( x => x.phone > 1);
console.log(biggerOne);