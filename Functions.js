//1. NAMED FUNCTION:
const prompt = require("prompt-sync")({signt:true});

// function notification(){
//     console.log("Hello students...day after tomorrow there is holiday")
// }
// notification()



// let a = parseFloat(prompt("Enter a:"));
// let b = parseFloat(prompt("Enter b:"));

// function math(a, b) {
//     function add() {
//         console.log("Addition of a & b:", a + b);
//     }
//     function sub() {
//         console.log("Subtraction of a & b:", a - b);
//     }
//     function mult() {
//         console.log("Multiplication of a & b:", a * b);
//     }
//     function div() {
//         if (b !== 0) {
//             console.log("Division of a & b:", a / b);
//         } else {
//             console.log("Division by zero is not allowed");
//         }
//     }

//     // calling inner functions
//     add();
//     sub();
//     mult();
//     div();
// }

// math(a, b);



//2. ANONYMOUS FUNCTIONS:
// const userProfile=function(userName,userPass){
//     const userProf=new Object()
//     userProf.profile="userProfile"
//     userProf.username=userName
//     userProf.passWord=userPass
//     userProf.isActive=true
//     console.log("user details:",userProf)

//     return userProf
// }
// let userProfileOne=userProfile(prompt("Enter userName:"),prompt("Enter passWord:"))
// console.log("user profile one:",userProfileOne)

// let userProfileTwo=userProfile(prompt("Enter userName:"),prompt("Enter passWord:"))
// console.log("user profile Two:",userProfileTwo)



//3. ARROW FUNCTION:
// let arrFun = () => console.log("this is one line function...")
// // arrFun()

// const prodOfNums = (...nums) =>{
//     console.log(nums)
//     let prod =1
//     for (let i of nums){
//         // prod=i*prod
//         prod*=i
//     }
//     // console.log("Product of given number:",prod)
//     console.log("Hello...")
//     return prod

// }
// let product = prodOfNums(1,2,3,4,5,6,7,8,9,10)
// console.log("Product of Given number:",product)



// 4.BUILT-IN FUNCTION:



// 5.IIFE(immediatly invoked function expression):
// (function(){
//     console.log("This is IIFE function")
// })()



// 6.HOF(heigher ordered function):
function Pyspiders(){
    console.log("This is Pyspiders BTM Bengolore")
}
function Student(){
    console.log("I'm student belongs to Pyspiders BTM")
}
Pyspiders(Student())






