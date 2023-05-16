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
let cards = [firstCard, secondCard]//array
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "do you want a new card?"
    } else if(sum === 21){
        message = "you win";
        hasBlackJack = true
    }
    else{
        message = "you're out";
        isAlive = false
    } 
   messageEl.textContent= message;
}
function newCard(){
    //console.log("Drawing new card from the deck");
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
}
