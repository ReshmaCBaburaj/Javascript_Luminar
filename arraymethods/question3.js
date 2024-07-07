//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]
 
]
//1. district having Highest +ve case
console.log("district having Highest +ve case")
 dist=covid_data.reduce((cvd1,cvd2)=>cvd1[2]>cvd2[2]?cvd1:cvd2)
console.log(dist[1])
console.log("------------------------------------------------------")
//2. district having Highest 1st dose vaccine
console.log("district having Highest 1st dose vaccine")
dist=covid_data.reduce((cvd1,cvd2)=>cvd1[5]>cvd2[5]?cvd1:cvd2)
console.log(dist[1])
console.log("------------------------------------------------------")

//3. district having lowest death rate
console.log("district having lowest death rate")
dist=covid_data.reduce((cvd1,cvd2)=>cvd1[3]<cvd2[3]?cvd1:cvd2)
console.log(dist[1])
console.log("------------------------------------------------------")

//4. sort data with +ve case in descending order
 console.log("sort data with +ve case in descending order")
 dist=covid_data.sort((cvd1,cvd2)=>cvd2[2]-cvd1[2])
 console.log(dist)
 console.log("------------------------------------------------------")

//5. is district with +ve cases > 15000
 console.log("is district with +ve cases > 15000")
 dist=covid_data.some(cvd=>cvd[2]>15000)
 console.log(dist?'yes':'no')
 console.log("------------------------------------------------------")

//6. sort data with 1st dose vaccine ascending order
 console.log("sort data with 1st dose vaccine ascending order")
 dist=covid_data.sort((cvd1,cvd2)=>cvd1[5]-cvd2[5]
)
 console.log(dist)
 console.log("------------------------------------------------------")

//7. Print Thrissur details
 console.log("Print Thrissur details")
dist=covid_data.find(cvd=>cvd[1]=='Thrissur')
console.log(dist)
console.log("------------------------------------------------------")

//8. Print total number of positive cases
 console.log("Print total number of positive cases")
pst= covid_data.map(cvd=>cvd[2])
// console.log(pst)
total=pst.reduce((pst1,pst2)=>pst1+pst2)
console.log(total)
console.log("------------------------------------------------------")

//9. Print total number of curred cases
 console.log("print total number of curred cases")
 crd=covid_data.map(crd=>crd[4])
 cured=crd.reduce((crd1,crd2)=>crd1+crd2)
 console.log(cured)
 console.log("------------------------------------------------------")

//10. Print curred cases in Idukki
console.log("print curred cases in Idukki")
crd=covid_data.find(cvd=>cvd[1]=='Idukki')
console.log(crd[4])
console.log("------------------------------------------------------")
