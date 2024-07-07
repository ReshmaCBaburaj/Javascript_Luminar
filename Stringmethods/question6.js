//beow is array of objects
weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
//1.create output object
obj={}
//2.access each object from the array
for(data of weatherData){

    dist=data['district']
    currtemp=data['weather']
    //3.check district is there in output object or not
   if(dist in obj){
    //compare temperature
        oldtemp=obj[dist]
        if(oldtemp>currtemp){
            obj[dist]=oldtemp
        }
        else{   //if new value is greater than old value
            obj[dist]=currtemp
        }
   }

   else{
    obj[dist]=currtemp
  
   }
}
console.log(obj)
