products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
 
//1. print product name only
 for(pdt of products){
  console.log(pdt['pName']);
 }
 console.log('--------------------------------------------');

//2. print all mobile details whose display is lcd
//  for(pdt of products){
//     if(pdt['display']=='lcd'){
//         console.log(pdt)
//     }
//  }
products.filter(pdt=>pdt.display=='lcd').forEach(item=>console.log(item))
 console.log('--------------------------------------------');

//3. print 5g mobile phone name
// products.forEach(pdt => {
//     if(pdt['band']=='5g'){
//         console.log(pdt['pName'])
//     }
    
// });
products.filter(pdt=>pdt.band=='5g').forEach(item=>console.log(item.pName))
 console.log('--------------------------------------------');
//4. sort mobile based on price

 c=products.sort((pdt1,pdt2)=>pdt1['price']-pdt2['price']).forEach(item=>console.log(item['pName']))



console.log('--------------------------------------------');

//5. print costly mobile

cd=products.reduce((pdt1,pdt2)=>pdt1['price']>pdt2['price']?pdt1:pdt2)
console.log(cd.pName);
console.log('--------------------------------------------');

//6. print low cost mobile
cd=products.reduce((pdt1,pdt2)=>pdt1['price']<pdt2['price']?pdt1:pdt2)
console.log(cd.pName)
console.log('--------------------------------------------');
