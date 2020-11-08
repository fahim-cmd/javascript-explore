class Parent {
    constructor(name){
        this.fatherName = " uddin";
    }
}
class Child extends Parent{
    constructor (he){
        super();
        this.name = he;
    }
    // function kothata na likhe ekhane function er nam dia function lekha jae;
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child ( " jhankar mahbub");
const baby2 = new Child ( " tom");

console.log(baby.getFullName());  
console.log(baby2.getFullName());