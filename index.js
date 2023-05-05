// // // initialize the count 0
// // //listen for clicks on the increment button
// // //increment the count variable when the button is clicked
// // //change the count-el in the html to reflect the new count

// // let lap1 = 30
// // let lap2 = 20
// // let lap3 = 50

// // function sum(){
// //     console.log(lap1 + lap2 + lap3)
// // }

// // // sum()

// // let lapsCompleted = 0

// // function increment(){
// //     lapsCompleted = lapsCompleted + 1
// // }

// // increment()
// // increment()
// // increment()

// // console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")//passing in arguments

// console.log(countEl)

// let count = 0

// function increment(){
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }

// increment()

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    console.log(count)
}
save()