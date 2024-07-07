//id,name,desgination,location,salary,experience

//[1000,'Neel','Developer','kochi',25000,3]

//oops

class employee{
    //property

    emp_name
    emp_desig
    emp_salary

    //constructor

    constructor(em_name,em_desi,em_sal){
        this.emp_name=em_name,
        this.emp_desig=em_desi,
        this.emp_salary=em_sal
    }

    //methods

    display(){
        console.log(`employee name is ${this.emp_name}`);
    }
}

//object

const obj=new employee('Reshma','Cloud engineer',25000)
obj.display();
const obj1=new employee('Aravind','Programmer analyst',25000)

obj1.display();