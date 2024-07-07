//reduce() - function apply to all array elements and return a single value(it will last value)

// a=[1,2,3,4,5,6,7,8,9,10]

//1.find the sum of elements

// console.log(a.reduce((n1,n2)=>n1+n2));

//2.find the highest element

// console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));

//3.find the lowest element

// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));

//reduceRight() - function apply to all array elements.And returns all values it will be the first value also


arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    [3,'ponnu',100],
    [4,'Manu',100],
    [5,'anu',300]
]

//who gets the mininum value
// console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));
//who gets the maximum value

// console.log(arr.reduceRight((n1,n2)=>n1[2]>n2[2]?n1:n2));


//[id,name,designation,location,salary,experience]
employee=[
    [1000,'Neel','Developer','Kochi',25000,3],
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],
 
]
 
//1 Print all employee name
console.log("all employee name\n");
employee.forEach(emp=>console.log(emp[1]));

//2 Print total number of employee

console.log("\ntotal number of employees");
console.log(employee.length);
//3 Print developer employee details

console.log("\ndeveloper employee details is");
console.log(employee.filter(emp=>emp[2]=='Developer'));
//4 Print all employee details whose salary > 30000

console.log("\nall employee details whose salary > 30000");
console.log(employee.filter(emp=>emp[4]>30000));
//5 Print details of employee Laisha

console.log("details of employee Laisha");
console.log(employee.find(emp=>emp[1]=='Laisha'));


//6 Sort employee based on descending order of salary

console.log("Sorting employee based on descending order of salary");
console.log(employee.sort((a,b)=>b[4]-a[4]));
//7 sort employee based on ascending order of experience
console.log("sorting employee based on ascending order of experience");
console.log(employee.sort((a,b)=>a[4]-b[4]));





