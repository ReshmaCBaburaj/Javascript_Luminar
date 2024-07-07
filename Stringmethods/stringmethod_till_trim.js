str="Luminar"
a=str.startsWith("Lum")
b=str.startsWith("lum")//false becoz case sensitive
c=str.endsWith("nar")
d=str.endsWith("Ar")//case sensitive
e=str.toUpperCase()
f=str.toLowerCase()

console.log(a,b,c,d,e,f)

str1="renninie     "
str2=str1.trim()
console.log(str2)

str1="     denninie     "
str2=str1.trim()
console.log(str2)

str1="     denni    nie     "//not removing the space..because it will remove the space only at the ends
str2=str1.trim()
console.log(str2)

str="Luminar"
console.log(str.substring(0,4))//4 is excluded
console.log(str.substring(2))
console.log(str.substring(2,5))


