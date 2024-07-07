//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]
 
 
//1. Find which district having highest +ve case?
console.log("district having highest +ve case");

console.log(covid_data.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2));

//2. Find which district having highest 1st dose vaccine?
console.log("\ndistrict having highest 1st dose vaccine");

console.log(covid_data.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2));

//3. Find which district having lowest death rate?
console.log("\ndistrict having lowest death rate");
console.log(covid_data.reduce((item1,item2)=>item1[3]<item2[3]?item1:item2));

//4. Sort the data with +ve case in desending order
console.log("\nSort the data with +ve case in desending order");

console.log(covid_data.sort((pos1,pos2)=>pos2[5]-pos1[5]));

//5. sort district with 1st dose vaccine
console.log("\nsort district with 1st dose vaccine");
covid_data.sort((item1,item2)=>item1[5]-item2[5]).forEach(dist => {
    console.log(dist[1]);
});

//6. print total number of curred cases
console.log("total number of curred cases");

total=covid_data.map(item=>item[4]).reduce((cur1,cur2)=>cur1+cur2)
console.log(total);
//7. print total curred cases in Edukki

console.log("total curred cases in Idukki");
covid_data.filter(item=>item[1]=="Idukki").forEach(item1=>console.log(item1[4]));

//8. Is any district having more than 27000 +ve cases -

console.log("district having more than 27000 +ve cases");
console.log(covid_data.some(item=>item[2]>27000));