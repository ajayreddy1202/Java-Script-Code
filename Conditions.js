//Conditions

//1. if statement:
// let userName="Pyspiders"
// if(userName==="Pyspiders"){
//     console.log("Fount user")
// }



//2. if else statement
//  const prompt=require("prompt-sync")({sigint:true})
// let userName="Pyspiders"
// if(userName==="Pyspiders"){
//     console.log("Fount user")
// }else{
//     console.log("User not found")
// }



//3. else if statement
// let speed=250
// if(speed>0 && speed<=40){
//     console.log("Driving too slow")
// }
// else if(speed>40 && speed<=100){
//     console.log("Driving normal speed")
// }
// else if(speed>100 && speed<=200){
//     console.log("Driving too fast")
// }
// else{
//     console.log("Welcome to heaven")
// }



//4. Nested if:
// const userName=prompt("Enter username:") 
// if (userName==="ajay"){
//     const password=prompt("Enter password:")
//     if (password==="ajay@123"){
//         console.log("logged successfilly")
//     }
//     else{
//         console.log("Incorrect password")
//     }
// }
// else{
//     console.log("Invalid user")
// }


//EXAMPLE:
// const trainer=prompt("Enter True/False:")
// if (trainer==="True"){
//     if (trainer==="False"){
//         console.log("class completed")
//     }
//     else{
//         console.log("class still going on")
//     }
// }
// else{
//     console.log("Class must yet started")
// }



//5. Swithch Case:
// let day=new Date().getDay()
// let today
// console.log(day)
// switch(day){
//     case 0:
//         // console.log("Today is Sunday")
//         today="Sunday"
//         break
//     case 1:
//         // console.log("Today is Monday")
//         today="Monday"
//         break
//     case 2:
//         // console.log("Today is Tuesday")
//         today="Tuesday"
//         break
//     case 3:
//         // console.log("Today is Wednesday")
//         today="Wednesday"
//         break
//     case 4:
//         // console.log("Today is Thurseday")
//         today="Thurseday"
//         break
//     case 5:
//         // console.log("Today is Friday")
//         today="Friday"
//         break
//     case 6:
//         // console.log("Today is Saturday")
//         today="Saturday"
//         break       
// }
// console.log(`Today is ${today}`)


//EXAMPLE:
// let day=new Date().getDay()
// let week=["sun","mon","tue","wed","thu","fri","sat"]
// console.log(week[day])



// HOTEL BILLING SYSTEM
// console.log("---------------------- MENU ---------------------------");
// console.log("1. BreakFast \n2. Lunch \n3. Snacks \n4. Dinner \n5. Beverages");
// console.log("-------------------------------------------------------");

// const prompt = require("prompt-sync")();   // For Node.js input
// let mainMenu = prompt("Enter your choice (1 to 5): ");

// // Common Billing Function
// function generateBill(items) {
//     console.log("---------------------------");
//     let choice = prompt("Enter your choice (1 to " + Object.keys(items).length + "): ");
//     let qty = parseInt(prompt("Enter number of plates: "));

//     let item = items[choice];
//     let total = item.price * qty;

//     // Discount 5%
//     let discount = total * 0.05;
//     let afterDiscount = total - discount;

//     // GST 5%
//     let gst = afterDiscount * 0.05;
//     let grandTotal = afterDiscount + gst;

//     // Print Bill
//     console.log("\n--------- BILL ---------");
//     console.log("Item      Qty   Price   Total");
//     console.log(`${item.name}   ${qty}   ${item.price}    ${total}`);
//     console.log("-------------------------");
//     console.log(`Discount (5%):  -${discount.toFixed(2)}`);
//     console.log(`GST (5%):       +${gst.toFixed(2)}`);
//     console.log("-------------------------");
//     console.log(`Grand Total:    ${grandTotal.toFixed(2)}`);
//     console.log("-------------------------");
//     console.log("Thank You! Visit Again ");
// }

// // ------------------ Menus ------------------

// // Breakfast
// if (mainMenu == "1") {
//     console.log("------ BREAKFAST MENU ------");
//     let items = {
//         1: { name: "Idli", price: 30 },
//         2: { name: "Dosa", price: 40 },
//         3: { name: "Puri", price: 40 },
//         4: { name: "Upma", price: 20 },
//         5: { name: "Bisi Bele Bath", price: 45 }
//     };
//     Object.entries(items).forEach(([key, value]) => {
//         console.log(`${key}. ${value.name} - ${value.price}`);
//     });
//     generateBill(items);
// }

// // Lunch
// else if (mainMenu == "2") {
//     console.log("------ LUNCH MENU ------");
//     let items = {
//         1: { name: "Veg Meals", price: 80 },
//         2: { name: "Chicken Meals", price: 120 },
//         3: { name: "Veg Biryani", price: 90 },
//         4: { name: "Chicken Biryani", price: 150 },
//         5: { name: "Curd Rice", price: 50 }
//     };
//     Object.entries(items).forEach(([key, value]) => {
//         console.log(`${key}. ${value.name} - ${value.price}`);
//     });
//     generateBill(items);
// }

// // Snacks
// else if (mainMenu == "3") {
//     console.log("------ SNACKS MENU ------");
//     let items = {
//         1: { name: "Samosa", price: 20 },
//         2: { name: "Pakoda", price: 25 },
//         3: { name: "Sandwich", price: 40 },
//         4: { name: "Burger", price: 60 },
//         5: { name: "French Fries", price: 50 }
//     };
//     Object.entries(items).forEach(([key, value]) => {
//         console.log(`${key}. ${value.name} - ${value.price}`);
//     });
//     generateBill(items);
// }

// // Dinner
// else if (mainMenu == "4") {
//     console.log("------ DINNER MENU ------");
//     let items = {
//         1: { name: "Veg Thali", price: 100 },
//         2: { name: "Paneer Butter Masala + Roti", price: 150 },
//         3: { name: "Chicken Curry + Rice", price: 180 },
//         4: { name: "Mutton Curry + Rice", price: 220 },
//         5: { name: "Curd Rice", price: 60 }
//     };
//     Object.entries(items).forEach(([key, value]) => {
//         console.log(`${key}. ${value.name} - ${value.price}`);
//     });
//     generateBill(items);
// }

// // Beverages
// else if (mainMenu == "5") {
//     console.log("------ BEVERAGES MENU ------");
//     let items = {
//         1: { name: "Tea", price: 15 },
//         2: { name: "Coffee", price: 20 },
//         3: { name: "Juice", price: 40 },
//         4: { name: "Milkshake", price: 60 },
//         5: { name: "Lassi", price: 35 }
//     };
//     Object.entries(items).forEach(([key, value]) => {
//         console.log(`${key}. ${value.name} - ${value.price}`);
//     });
//     generateBill(items);
// }

// else {
//     console.log("Invalid choice! Please run again.");
// }




//HOTEL BILLING SYSTEM
console.log("-------------- MENU ------------");
console.log("1. BreakFast \n2. Lunch \n3. Snacks \n4. Dinner \n5. Beverages");
console.log("--------------------------------");

const prompt = require("prompt-sync")();   // For Node.js input
let mainMenu = prompt("Enter your choice (1 to 5): ");

// Breakfast Menu
if (mainMenu == "1") {
    console.log("------ BREAKFAST MENU ------");
    console.log("1. Idli - 30");
    console.log("2. Dosa - 40");
    console.log("3. Puri - 40");
    console.log("4. Upma - 20");
    console.log("5. Bisi Bele Bath - 45");

    let choice = prompt("Enter your choice (1 to 5): ");
    let qty = parseInt(prompt("Enter number of plates: "));

    let items = {
        1: { name: "Idli", price: 30 },
        2: { name: "Dosa", price: 40 },
        3: { name: "Puri", price: 40 },
        4: { name: "Upma", price: 20 },
        5: { name: "Bisi Bele Bath", price: 45 }
    };

    let item = items[choice];
    let total = item.price * qty;

    // Discount 5%
    let discount = total * 0.05;
    let afterDiscount = total - discount;

    // GST 5%
    let gst = afterDiscount * 0.05;
    let grandTotal = afterDiscount + gst;

    // Print Bill
    console.log("\n--------- BILL ---------");
    console.log("Item      Qty   Price   Total");
    console.log(`${item.name}   ${qty}   ${item.price}    ${total}`);
    console.log("-------------------------");
    console.log(`Discount (5%):  -${discount.toFixed(2)}`);
    console.log(`GST (5%):       +${gst.toFixed(2)}`);
    console.log("-------------------------");
    console.log(`Grand Total:    ${grandTotal.toFixed(2)}`);
    console.log("-------------------------");
    console.log("Thank You! Visit Again ");
}











