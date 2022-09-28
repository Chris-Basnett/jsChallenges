/*
Write a function that takes 2 values as arguements and then
creats an Array of numbers between the 2 values
*/
exports.arrayGenerator = (min, max) =>{
    const arr = []
    for (let i = min; i <= max; i++) arr.push(i)
    return arr
}