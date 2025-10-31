// 1.parseInt():-convert a string number into a parseInt
let prompt=require("prompt-sync")({sigint:true})
// let strNum=prompt("enter a number:")
// console.log(typeof strNum)
// let Num=Number.parseInt(strNum)
// console.log(typeof Num)


// 2.Number():-converts an string number into premitive number
console.log("Num:",Number('100'))


// 3.parseFloat():-converts an string number into floating number
console.log(parseFloat("111.11"))


// 4.isFinit():-returns true if given number is finite or else returns false
console.log("Is 100 finite:",isFinite(100))
console.log("Is 100/0 finite:",isFinite(100/0))


// 5.isInteger():-
console.log("is 123 integer",Number.isInteger(123))
console.log("is 123.123 interger",Number.isInteger(123.123))


// 6.isNaN():-check wether entered value is number or not. 
// return true if value is not a number,else false
console.log(isNaN("123"))
console.log(isNaN("100a"))

// let n=prompt("enter a value:")
// console.log(isNaN(n) ? `${n} is not a number`: `${n} is a number`)


// 7.toFixed():-decides number of digit s after the decimal point
console.log((111.12345).toFixed(3))
console.log((111.12345).toFixed(2))
console.log((111.12345).toFixed(1))
console.log((111.12345).toFixed(0))





































