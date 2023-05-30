let myLeads = ["bla","boo","bee"]
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click",function() {
    console.log("Button clicked");
    myLeads.push(inputEl.value)
})


for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "<li/>"
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}


// let boxEl = document.getElementById("box")

// boxEl.addEventListener("click", function() {
//     console.log("I want to open the box!");
// }) 

