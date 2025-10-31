// 1. FOR LOOPS
const prompt = require("prompt-sync")({signt:true});
// let n=prompt("Enter n:")
// for(let i=1;i<=n;i++){
//     console.log(i);
// }


// PRINT EVEN OR ODD
// let n=prompt("Enter n:")
// let even=" "
// let odd=" "
// for(let i=1;i<=n;i++){
//     if (i%2==0){
//         even+=i+" "
//     }
//     else{
//         odd+=i+" "
//     }
// }
// console.log("Odd numbers:",odd)
// console.log("Even numbers:",even)




// 2. FOR IN
// const car={
//     name:"Harrier",
//     brand:"Tata",
//     color:"Dark",
//     fuel:"Diesel",
//     abs:true,
//     price:2300000
// }
// for (let i in car){
//     console.log(i,":",car[i])
// }




// 3. FOR OF:
// let discontinuedmobile=["Lava","BlackBerry","Micromax","Karbonn","Lenovo","HTC","Sony","LG","Nokia"]
// console.log("Discontinued Mobiles:",discontinuedmobile)
// for(let mobile of discontinuedmobile){
//     console.log(mobile,"is discontinued")
// }




// 4. WHILE LOOP:
// let num=prompt("Enter number:")
// let i=num
// while(i>=-num){
//     console.log(i)
//     i--
// }




// 5. DO WHILE:
// let num=31
// do{
//     console.log("This is do-while loop")
//     num++
// }while(num<=35)




// Defining a car object
const car = {
    name: "Harrier",           
    brand: "Tata",              
    color: ["Dark", "Orange", "White"],  
    fuel: "Diesel",             
    abs: true,                  
    price: {                    
        top: 2800000,           
        mid: 2400000,          
        base: 1800000           
    }
}
for (let val in car){
    if(typeof car[val]==='object'){
        for(let val2 in car[val]){
            if(val=="color"){
                console.log("color:",car[val][val2]);
            }
            else{
                console.log(val2,':',car[val][val2]);
            }
        }
    }
    else{
        console.log(val,':',car[val])
    }
}








































