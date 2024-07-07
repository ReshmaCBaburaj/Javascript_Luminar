words=[10,20,30,40,30,20,50,30,60,70,10,40,80]

//w.a.p to find the number count from the given array and display as an object

//create an empty object
// obj={}
//check whether the elements in the array is present in the object or not
// for (word of words){
//     if(word in obj){
        //if present then increment the count
    //     obj[word]+=1
    // }
    // else{
        //else add as a key:value pair to the object
//         obj[word]=1
//     }
// }
// console.log(obj)


//using array method 



num={}
words.forEach(item=>item in num?num[item]+=1:num[item]=1)

console.log(num)
