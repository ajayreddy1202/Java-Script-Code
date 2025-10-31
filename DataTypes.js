//1.String
// let userName='Ajay'
// console.log("Username:",userName)

// let studentOf="Pyspider's"
// console.log(userName + " is student of " +studentOf)

// let course=`Python Full Stack Development`
// console.log(`${userName} is a ${studentOf} student, learning ${course}`)   //Template literal

// //Checking DataType
// console.log(typeof userName)


//2.number
// let capacity=12345678901234567890
// console.log(capacity)


//3.BigInt-
// let bigNum=BigInt("123456789012345678901234567890")
// console.log(bigNum)
// console.log(typeof bigNum)

// let largeNum =
// 1234567890123456789012345678901234567890n
// console.log(largeNum)
// console.log(typeof largeNum)


//4.Boolean


//5.Undefined
// let age
// console.log("Keep your age as :", age)
// console.log(typeof age)

// age = 10
// console.log("Age is: ", age)
// console.log(typeof age)


//6.Null
// let salary = null
// console.log("Salary:", salary)
// console.log("Data Type:",typeof null)


//7.Object
const trainTicketBooking={
    passengerName:"Ashok",
    travelDate:"23/09/2025",
    source:"Bangalore",
    destination:"Bangladesh",
    BookingStatus:"Confirmed",
    coach:"D3",
    seatNumber:56,
    insurenceAvail:true,
    ticketPrice:4130,
    contact:{
        mobile:9347946409,
        mailId:"ashok@gmail.com"
    }
}
console.log("Train Booking Details:",trainTicketBooking)
console.log(typeof trainTicketBooking)


//Accessing the value
console.log(`Passanger name: ${trainTicketBooking["passengerName"]}`)
console.log(`Booking date: ${trainTicketBooking.travelDate}`)
console.log("Passenger contact details:",trainTicketBooking.contact)
console.log(`Passenger contact number: ${trainTicketBooking.contact.mobile}`)


//Modifying the object
trainTicketBooking.seatNumber=71
console.log("Updeted booking details:",trainTicketBooking)

//Adding new property
trainTicketBooking.foodOrder=false
console.log("Updated:",trainTicketBooking)

//Deleting property
delete trainTicketBooking.destination
console.log("New details:",trainTicketBooking)


trainTicketBooking.passangerName="unknown"
console.log(trainTicketBooking)


//Displaying the object as table
console.table(trainTicketBooking)


let x=99
console.log(x--)
console.log(x++)
console.log(++x)
console.log(x)
console.log(--x)
console.log(x)






























