let myLeads = []

// myLeads = JSON.parse(myLeads)//turns it into an array
// myLeads.push("www.hello.com")
// myLeads = JSON.stringify(myLeads)//turns the array to a string again
// console.log(typeof myLeads);

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

// localStorage.setItem("myLeads","www.hey.com")
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear



saveBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()

    console.log(localStorage.getItem("myLeads"));
})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target ='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a><li/>"
        //template strings
        listItems += `<li>
                          <a target ='_blank' href ='${myLeads[i]}'>
                          ${myLeads[i]}
                          </a>
                      </li>
                       `
}
ulEl.innerHTML = listItems
}
// //dom manipulation has a cost

// // let boxEl = document.getElementById("box")

// // boxEl.addEventListener("click", function() {
// //     console.log("I want to open the box!");
// // }) 
// const recipient = "James"
// let sender = 'Ryan'

// const email = `
//                Hey ${recipient}! 
//                How is it going?
//                Cheers ${sender}
//             `
// console.log(email);
