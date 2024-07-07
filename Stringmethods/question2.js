sentence='good morning all'

//w.a.p to print all the vowels in the given string

vowels=['a','e','i','o','u','A','E','I','O','U']

character=sentence.split('')

//first method
// console.log(character)
// for(let char of character){
//     if(vowels.includes(char)){
//         console.log(char)
//     }
// }
//second method
c=character.filter(char=>vowels.includes(char))
c.forEach(ch=>console.log(ch))



