//filter

a=[10,12,15,13,25,2,3,5]

//w.a.p to print all even numbers from a given array
even=a.filter(n1=>n1%2==0)
console.log(even)
//w.a.p to print all numbers >13 from the given array

b = a.filter(n1=>n1>13)
console.log("greatest numbers"+b)

// w.a.p to check whether numbers greater than 13 exist in the given array

b=a.some(n1=>n1>13)
console.log(b?"yes":"no")