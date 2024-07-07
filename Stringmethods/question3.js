text = 'hai hello all hello world all'

//w.a.p to print the word count from the given string

//output = {hai:1,hello:2,all:2}

//ans:

//convert the text into array of words

words=text.split(' ')
console.log(words)

//create a new empty object

obj = {}

//fetch each words from an array
for (word of words){
//check each word is present in the created object
    if(word in obj){
        //if present increment the count
        obj[word]+=1
    }
    else{ 
        //add a new key:value to the object
        obj[word]=1
    }
} 
//display the object
console.log(obj)

// next method using array method

wc={}
text.split(' ').forEach(item=>item in wc?wc[item]+=1:wc[item]=1);
console.log(wc)

