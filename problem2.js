/*
write a function that takes a string as an argument,
extract the last characters from the string using another argument,
return expected/results
*/
const stringSlicer = (str, num) =>{
    return str.slice(-num)
}
module.exports = {
    stringSlicer,
}