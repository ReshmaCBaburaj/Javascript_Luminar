var car= {
    name:'bolero',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10lakhs'
}

//w.ap. to print model and manufacturername of the given car

console.log(` car model is ${car.model},manufacturer is ${car.manufacturer},price is ${car.price}`)
//w.ap. to add the key varient to the given object with value has manual
car["varient"]=['manuel'];//here we are assigning as an array because more than one value car il hold aakum.
console.log(car)
//w.a.p to add new value 'automatic' to the key varient
car.varient.push('automatic')
//w.a.p to add the key color  with value as red,blue ,white

car["color"]=['red','blue','white']
console.log(car)