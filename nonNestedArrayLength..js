//Length of Non-Nested Array
const numArr = [1, [2, 3]];
const getLength = arr=>{
    let flat = a => a.reduce((b,c) => b.concat(Array.isArray(c) ? flat(c) : c),[]);
    return flat(arr).length;
};
console.log(getLength(numArr));