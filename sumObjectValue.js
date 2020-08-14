const ages = { eagle: 13, sparrow: 15, robin: 12, bluebird: 11 };
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
const sumAges = sumValues(ages);
console.log(sumAges);