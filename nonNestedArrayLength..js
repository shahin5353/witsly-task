const numArr = [1, [2, 3,[4,5]]];
const flat = arr => arr.reduce((a,b) => a.concat(Array.isArray(b) ? flat(b) : b),[]);
const arrLength = flat(numArr).length;
console.log(arrLength);