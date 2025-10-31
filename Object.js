//7.Object
// const trainTicketBooking={
//     passengerName:"ajay",
//     travelDate:"23/09/2025",
//     source:"Bangalore",
//     destination:"Bangladesh",
//     BookingStatus:"Confirmed",
//     coach:"D3",
//     seatNumber:56,
//     insurenceAvail:true,
//     ticketPrice:4130,
//     contact:{
//         mobile:9347946409,
//         mailId:"ajay@gmail.com"
//     }
// }

// console.log("Train Booking Details:",trainTicketBooking)
// console.log(typeof trainTicketBooking)


// 1. keys(): returns all keys in object
// let allKeys=Object.keys(trainTicketBooking)
// console.log("All Keys:",allKeys)

// 2.values():returns all values in object
// let allvalues=Object.values(trainTicketBooking)
// console.log("All values:",allvalues)

// fetch values from nested objects

// 3.entries(): returns  an nested array of keys and values pair
// console.log(Object.entries(trainTicketBooking))

// 4.assign(): merges properties from one object to original object
// contact={
//         mobile:9347946409,
//         mailId:"ashok@gmail.com"
// }
// let merged=Object.assign(trainTicketBooking,contact)
// console.log("Merge object:",merged)

// using spread operator
// let=alternateMerge={...trainTicketBooking,...contact}
// console.log("Another method of merging objects:",alternateMerge)

// Creating copy of object using spread operator
// let copiedMerge={...alternateMerge}
// console.log("copied object:",copiedMerge)

// 5.seal():-prvents adding and removing of properties,still modification of existing 
// value is allowed
// Object.seal(contact)
// console.log("original contact:",contact)

// contact.alternateMobile=9491157645   // not allowed to add as new property
// console.log(contact)

// console.mobile="xxxxx-4501"
// console.log(contact)

// 6.freez():- prevents adding,removing and modification of object properties


// JSON methods
// let Person = {
//     name: 'ajay',
//     age: 22,
//     desg: 'software-engineer'
// };
// let valuesPart = Object.values(Person).join('-');
// let keysPart = Object.keys(Person).reverse().join('-');
// let result = valuesPart + '-' + keysPart;

// console.log(result);


const trainTicketBooking={
    passengerName:"ajay",
    travelDate:"23/09/2025",
    source:"Bangalore",
    destination:"Bangladesh",
    BookingStatus:"Confirmed",
    coach:"D3",
    seatNumber:56,
    insurenceAvail:true,
    ticketPrice:4130,
}


// 1.stringify()-converts as JS object into JSON
let passengerJSON=JSON.stringify(trainTicketBooking)
console.log(passengerJSON)


// 2.parse()- converts JSON into JS object
let detailsJSON=`{
    "BookingStatus":"Confirmed",
    "coach":"D3",
    "seatNumber":"56",
    "insurenceAvail":"true",
    "ticketPrice":"4130"
}`
console.log(detailsJSON)
let detailsObject=JSON.parse(detailsJSON)
console.log(detailsObject)
