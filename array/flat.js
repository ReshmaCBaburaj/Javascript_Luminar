a=[
    [10,50],
    [20,50],
    [1,5],
    [15,25],
    [3,8],
    [100,500]
]

//print all numbers greater than 10

console.log(a.flat());
console.log(a.flat(1).filter(num=>num>10));

//you can pass a larger depth value to completely flatten deeply nested arrays

//deeplyNestedArray => CompletelyFlattenedArray will be [1,2,3,4,5]

const NestedArray= [1,[2,[3,[4,[5]]]]];

console.log(NestedArray.flat(1));
console.log(NestedArray.flat(2));
console.log(NestedArray.flat(3));
console.log(NestedArray.flat(Infinity));

//can you provide an example using flat method with an array that contains empty slot?

const arraywithEmptySlots=[1, ,[2,3],[4, ,[5,6]]]
console.log(arraywithEmptySlots.flat());

