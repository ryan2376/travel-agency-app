// let firstCard = 7
// let secondCard = 9

// let sum = firstCard + secondCard

// console.log(sum)

// if (sum < 21) {
//     console.log("do you want to draw another card?")
// }
// else if (sum === 21){
//     console.log("wohoo! you've got black jack");
// }
// else (sum > 21){
//     console.log("You're out of the game!");
// }

// let age = 22

// if (age < 21){
//     console.log("You cannot enter the club!");
// }
// else{
//     console.log("welcome!!");
//}

// let age = 100

// if (age < 100){
//     console.log("you are not eligible");
// }
// else if (age === 100) {
//     console.log("here is your letter");
// } else {
//     console.log("acha ufala ushapewa");
// }

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("do you want a new card?");
} else if(sum === 21){
    console.log("you win");
    hasBlackJack = true
}
else{
    console.log("you're out");
    isAlive = false
}


console.log(hasBlackJack);
console.log(isAlive);