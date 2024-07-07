//std=[name,rollno,address,phoneno]

class student{
    //property
    stdname
    stdroll
    stdaddr
    stdphone

    //constructors
    constructor(name,roll,addr,phone){
        this.stdname=name,
        this.stdroll=roll,
        this.stdaddr=addr,
        this.stdphone=phone
    }
    //methods
    display(){
        console.log(`employee details is ${this.stdname},${this.stdaddr},${this.stdphone}`);
    }
}

const obj=new student('reshma',22,'chennattu',7510598597)
obj.display();
const obj1=new student('aravind',23,'chirayil',8078174437)
obj1.display();