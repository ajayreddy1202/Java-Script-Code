// 1.PI
console.log("1.Value Pi:",Math.PI)


// 2.ROUND():-round the given decimal to nearest whole number
console.log("2. round 3.7:",Math.round(3.7))
console.log("2. round 3.4:",Math.round(3.4))


// 3.CEIL(): round up the given number to next whole number
console.log("3.ceil of 3.1:",Math.ceil(3.1))


// 4.FLOOR():- rounds down the given number to its previous whole number
console.log("4. floor of 9.9:",Math.floor(9.9))


// 5. TRUNC():- removes all decimal values and returns whole number.
console.log("5.trunc of 3.333333:",Math.trunc(3.333333))


// 6.SQRT()-returns the square root of given number
console.log("6.sqrt of 1024:",Math.sqrt(1024))


// 7.POW(x,y): returns the power of given number
console.log("7.power of 6^4:",Math.pow(6,4))


// 8. abs():-returns obsolute value of the given number
console.log("8.Absolute value of -33:",Math.abs(-33))


// 9.mim():- returns the minimum mumber passed
console.log("9.minimum of (0,222,-1,-222):",Math.min(0,222,-1,-222))


// 10.max():-returns the maximum of passed number.
console.log("10.maximum of (0,253,894,-36):",Math.max(0,253,894,-36))


// 11.sin():- returns sin value of given number
console.log("11.sin value of 1:",Math.sin(1))


// 12.cos():-returns cos value of given number
console.log("12.cos value of 1:",Math.cos(1))


// 13.log():- returns the log value of given nunber
console.log("13. log of 1 to the base 10:",Math.log10(1))


// 14.random():-returns the random number between 0 to 1.
console.log("14.random:",Math.random())


// write a JS program to generate OTP of 4 digit

let OTP=Math.trunc(Math.random()*10000)
console.log("OTP:",OTP)
let prompt=require("prompt-sync")({sigint:true})
let otp=prompt("enter otp:")
if (otp===Math.trunc(Math.random()*10000)){
    console.log("OTP is valid")
}else{
    console.log("OTP is not valid")
}


















































