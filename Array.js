// Array -> These are the containers to store multiple value,enclosed within
// square brackets and values are seperated by Comma.
// 


// type of array
// console.log(typeof data)

// Accessing values from array
// console.log("First value:",data[0])

// Finding the length of the array
// console.log("Length of the array:",data.length)

// deleting value from array
// delete data[6]
// console.log("Update the data:",data)

// Iterating  through


// Built-in methods

// 2.pop():
let pyspiders=["Students","Councellore","Manager","Account","Branding","Trainers","Head"]
// pyspiders.pop()
// console.log(pyspiders)


// 3.push():
pyspiders.push("Security")
console.log(pyspiders)


// 4.shift():
pyspiders.shift()
console.log(pyspiders)


// 5.unshift():
pyspiders.unshift("worker")
console.log(pyspiders)


// 6.join():
pyspiders.join("...")
console.log(pyspiders)


// 7.concat():
let nums=[1,2,3,4]
let alpha=['a','b','c','d']
console.log(nums.concat(alpha))


// Spred operator - create a shallow copy of original array
let newArr=[...nums]
// console.log("Shallow copy of nums:",newArr)


// copy values from one array to another 
let combined=[...nums,...alpha]
console.log("combined:",combined)

let newCombined=[...combined,10,20,30]
console.log("combined2:",newCombined)


// 8.slice():

// 9.splice():
// let cart=["Mobile","Charger","Laptop","PowerBank","Airpods","Tshirt"]
// let removedProd=cart.splice(2,2,"Watch","Shoes","Socks")
// console.log("Removed products from cart:",removedProd)
// console.log("Update cart:",cart)

// 10.SORT():
console.log("Sorted pyspiders:",pyspiders.sort())

let randNums=[100,101,99,31,45,78,69]
console.log("Sorted random numbers:",randNums.sort((a,b)=>{
    return a-b
}))


// 11.REVERSE():
console.log("Reverse array:",pyspiders.reverse())


// 12.FLAT():
// let nestedArr=["a","b","c",[1,2,3,4,5,['!',"@","#"],5,7],"d","e"]
// console.log(nestedArr[3][5][2])
// console.log("Flattened array:",nestedArr.flat(2))
// console.log("Flattened array:",nestedArr.flat(Infinity))


// 13.FILL():
// let num=[1,2,3,4]
// console.log(num.fill("0",0,4))
// console.log(num.fill(1,2,"*","*",5))
// num.length=0
// console.log(num)


// 14.MAP():
// let naturalNums=[1,2,3,4,5,6,7,8,9,10]
// let allCubes=naturalNums.map((element)=>{
//     return element**3
// })
// console.log("All cubes:",allCubes)


//15.FILTER():
// let divisibleByFive=allCubes.filter((item)=>{
//     return item%5==0
// })
// console.log("Cubes divisible by 5:",divisibleByFive)

const prompt = require("prompt-sync")({signt:true});

// let institute = ["Students", "Councellore", "Trainers", "Students", "Manager",
// "Students", "Account", "Branding", "Students", "Trainers", "Head", "Trainers",
// "Councellore"];
// let searchKey = prompt("Enter the key you want to search:");
// let count = institute.filter((element) => element === searchKey).length;
// if (count > 0) {
//     console.log(searchKey,count);
// } else {
//     console.log("Not presented");
// }


// // 16.REDUCE():
// let naturalNums=new Array()
// for(let i=1;i<=10;i++){
//     naturalNums.push(i);
    

// }
// let sum=naturalNums.reduce(reducer)
// function reducer(a,b){
//     return a+b
// }
// console.log("Sum of first 10 natural numbers:",sum)



// // 17.FOREACH():
// let cart=["Mobile","Charger","Laptop","PowerBank","Airpods","Tshirt"]
// cart.forEach((item)=>{
//     console.log(`Item in cart: ${item}`)



//18.EVERY():
// let num=[11,22,33,44,55,66,77,88,99]
// let result=num.every((element)=>{
//     return element % 11===0
// })
// let finalRes = result ? "Every number in array is divisible by 11":"Every number in array is not divisible by 11"
// console.log(finalRes)


// 19.SOME():
// cart=["Mobile","Charger","Laptop","PowerBank","Airpods","Tshirt"]
// let useritem=prompt("Enter the item:")
// let item=cart.some((element)=>{
//     return element===useritem
// })
// let result1=item ?"True":"False"
// console.log(result1)


// Destructing - it an techinique in JS to assign value of an collection into an  collections into an 
// distinct variable by unpacking collection.
let cart1=["Mobile","Charger","Laptop","PowerBank","Airpods","Tshirt"]
console.log(cart1[0])

let [item1,item2,item3,...leftitem]=cart1

console.log(item1)
console.log(item2)
console.log(leftitem)














