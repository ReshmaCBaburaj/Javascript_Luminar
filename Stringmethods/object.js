 
//[id, name, designation, location, salary, experience]
//array
 
arr=[1000,'Neel','developer','kochi',25000,3]

//object
employee={
    id:1000,
    name:'Neel',
    designation:'developer',
    place:'kochi',
    //salary:25000,
    experience:3,
    age:35
}
console.log(typeof(arr));
console.log('----------------------------------')

console.log(typeof(employee))
console.log('----------------------------------')

console.log(arr[5]);//access elements in an array
console.log('----------------------------------')

console.log(employee['experience'])//access elements in an obj
console.log('----------------------------------')

console.log(employee.name)//access elements in an obj using dot operator
console.log('----------------------------------')


//how to access a key from a object

//in method is used to follow the key 

console.log('----------------------------------')

for(let key in employee){
    console.log(key)
}


//w.a.p to check whether the desgination is present in the given object

console.log('----------------------------------')


// isPresent=false
// for(let key in employee){
//     if(key=='designation')
//     {
//         isPresent=true
//     }

// }
// console.log(isPresent?'present':'not present')

//another method

if('designation' in employee){
    console.log('present')
}
else{
    console.log('not present')
}

console.log(`designation is ${'designation'in employee?'present':'not present'}`)

console.log('----------------------------------')

//how to add key value pair into an object

//objectname["key"]=value

//add salary to the given obj employee

employee["salary"]=25000
console.log(employee)

console.log('----------------------------------')

//check the gender key is present  or not if present print yes otherwise add gender and give value as male

// if('gender' in employee){
//     console.log('yes')
// }
// else{
//     employee["gender"]='male'
//     console.log(employee)
// }

'gender' in employee?'present':(employee["gender"]='male',console.log(employee));

//update a value in  a object

employee.age+=5
console.log(employee)

//how to delete a key from an object

//delete emthod is used.it returns a boolean value

delete employee.age

console.log(employee)

//h/w create student object and access using all these methods
//get,add,update,delete