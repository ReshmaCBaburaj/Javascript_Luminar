//wap to check whether the given number is mobile number or not
//data that will be coming from backend as string
a="1234567829"
if(a.length==10){
    console.log("given is mobile number")
}
else{
    console.log("not a mobile number")
}
    




//wap to check whether the given mail id is gmail.com or not//so @gmail.com is there at last or not
str="reshmacbaburaj@gmail.com"
if(str.endsWith("@gmail.com")){
    console.log("given is gmail account")
}
else{
    console.log("not gmail account")
}
//wap to check whether the given string starts with q or not

str="quneind"
// if(str.startsWith("q")){
//     console.log("given string starts with q letter")
// }

console.log(str.startsWith("q")||str.startsWith("Q")?"the given word starts with q":"not starts with q")