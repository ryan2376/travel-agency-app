// // // // // initialize the count 0
// // // // //listen for clicks on the increment button
// // // // //increment the count variable when the button is clicked
// // // // //change the count-el in the html to reflect the new count

// // // // let lap1 = 30
// // // // let lap2 = 20
// // // // let lap3 = 50

// // // // function sum(){
// // // //     console.log(lap1 + lap2 + lap3)
// // // // }

// // // // // sum()

// // // // let lapsCompleted = 0

// // // // function increment(){
// // // //     lapsCompleted = lapsCompleted + 1
// // // // }

// // // // increment()
// // // // increment()
// // // increment()

// // // // console.log(lapsCompleted)

// // // let countEl = document.getElementById("count-el")//passing in arguments

// // // console.log(countEl)

// // // let count = 0

// // // function increment(){
// // //     count = count + 1
// // //     countEl.innerText = count
// // //     console.log(count)
// // // }

// // // increment()

// // let saveEl = document.getElementById("save-el")

// // let countEl = document.getElementById("count-el")

// // let count = 0

// // function reset(){

// //     count = 0

// // }

// // //let entries = 0
// // function increment(){
// //     count += 1
// //     countEl.textContent = count
// //     console.log(count)
    
// // }

// // function save(){
// //     entries = count + " - " 
// //     //entries += 1
// //     saveEl.textContent += entries

// //    // console.log(entries)
// //     console.log(entries)
// //     countEl.textContent = 0 
// //     reset()
// // }

// // // let message = "You have three new notifications"
// // // let username = "per"
// // // let messageToUser = message + ", " + "!"
// // // console.log(messageToUser)


// // // let Name = "Ryan"
// // // let greeting = "Hi, my name is "

// // // let myGreeting = greeting + Name
// // // console.log(myGreeting)

// // let welcomeEl = document.getElementById("welcome-el")
// // let Name = "Ryan"
// // let greeting = "Hi, my name is "

// // welcomeEl.innerText = greeting + Name


// let firstName = "Ryan "
// let lastName = "Munene"
// let fullName = firstName + lastName
// console.log(fullName)


// let namee = "Linda"
// let greeting = "Hi there"

// function msg(){
//     console.log(greeting + ", " + namee +"!")
// }
// msg()


// let myPoints = 3

// function add3Points(){
//     myPoints += 3

// }

// function remove1Point(){
//     myPoints -= 1
// }

// add3Points()
// remove1Point()
// add3Points()
// remove1Point()
// add3Points()


// console.log(myPoints)

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
let sum

function add(){
    sum =  num1 + num2 
    //document.getElementById("sum-el").textContent += sum 
    sumEl.textContent = "Sum: " + sum
}

function subtract(){
    sum = num1 - num2
    //document.getElementById("sum-el").textContent += sum    
    sumEl.textContent = "Sum: " + sum

}
function divide(){
    sum = num1/num2
    //document.getElementById("sum-el").textContent += sum    
    sumEl.textContent = "Sum: " + sum

}
function multiply(){
    sum = num1 * num2
   // document.getElementById("sum-el").textContent += sum    
    sumEl.textContent = "Sum: " + sum

}


