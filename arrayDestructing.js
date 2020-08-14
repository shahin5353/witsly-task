//Nested Array Destructing
const numArr = [5, [[4], 6]];
const [five,[[four],six]]=[...numArr];
console.log(five,four,six);