let countEl = document.getElementById("count")
let paraEl = document.getElementById("prev-count")
let errorPara = document.getElementById("error")
 let saveNo = 0
console.log(countEl)
let count = 0 
function increment(){
    count += 1
    console.log(count)
    countEl.innerText = count
}


function saveCount(){

    saveNo += 1
    let dashCount = saveNo + " Save: " +  count + "\n"
    count = 0
    countEl.innerText = 0 
    paraEl.innerText += dashCount
}

function resetCount(){
    count = 0
    countEl.innerText = count
    dashCount = "" 
    paraEl.innerText = dashCount
    saveNo = 0
}