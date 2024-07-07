//nested array
 
//[id, name, designation, location, salary, experience]
 
employee =[
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer' ,'kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
 
// print all employee name
employee.forEach(emp=> {
    console.log(emp[1]);
});
console.log("------------------------------------")
//print total numbers of employee
 console.log(employee.length)
 console.log("------------------------------------")

//print developer employee details
 employee.filter(emp=>emp[2]=='developer').forEach(pro=> console.log(pro))
 console.log("------------------------------------")

// print details of employee Laisha
 laisha=employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro))
 
 console.log("------------------------------------")

 //2nd method

//  Laisha1=employee.find(emp=>emp[1]=='Laisha')
//  console.log(Laisha1)

 //print employee name whose salary is greater than 30k
thirty=employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))
console.log("------------------------------------")

//sort employee based on their salary in descending order
 desc=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
 console.log(desc)
 console.log("------------------------------------")

//sort employee based on their experience in ascending order
desc=employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(desc)
console.log("------------------------------------")

// print the employ name whose have the higest salary
exp=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(exp[1])
console.log("------------------------------------")

// print the employ name whose have the least salary
exp=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)

console.log(exp[1])
console.log("------------------------------------")

//total salary expense of the company

total=employee.map(emp=>emp[4])
console.log(total)
console.log("total salary expense of the company")

console.log(total.reduce((sal1,sal2)=>sal1+sal2)
)