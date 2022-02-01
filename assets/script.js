let yourName = "Anthony Connell"
let quantityGb = document.getElementById("qty-gb")
let quantityCc= document.getElementById("qty-cc")
let quantitySugar = document.getElementById("qty-sugar")
let quantityTotal = document.getElementById("qty-total")
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

const credit = document.querySelector("#credit")
const gbPlusBtn = document.getElementById("add-gb")
const gbDecreaseBtn = document.getElementById("minus-gb")
const ccPlusBtn = document.getElementById("add-cc")
const ccDecreaseBtn = document.getElementById("minus-cc")
const sugarPlusBtn = document.getElementById("add-sugar")
const sugarDecreaseBtn = document.getElementById("minus-sugar")

credit.textContent = `"Created by ${yourName}"`

gbPlusBtn.addEventListener('click', function(){
        gb++
        quantityTotal++
        updateGb(`${gb}`)
    console.log("gb", gb)
})

gbPlusBtn.addEventListener('click', function(){
        total++
        updateTotal(`${total}`)
    console.log(total)
})

gbDecreaseBtn.addEventListener("click", function(){
    if(gb > 0){
        gb--
    } 
        updateGb(`${gb}`)
        console.log("gb", gb)
})
gbDecreaseBtn.addEventListener("click", function(){
    if(total > 0){
        total--
    } 
        updateTotal(`${total}`)
        console.log(total)
})

function updateGb(displayQuantityGb) {
    let quantityGb = document.getElementById("qty-gb")
    quantityGb.innerHTML = displayQuantityGb
}

ccPlusBtn.addEventListener('click', function(){
        cc++
        updateCc(`${cc}`)
    console.log("choc chip", cc)
})

ccPlusBtn.addEventListener('click', function(){
    total++
    updateTotal(`${total}`)
console.log(total)
})

ccDecreaseBtn.addEventListener("click", function(){
    if(cc > 0){
        cc--
    } 
        updateCc(`${cc}`)
        console.log("choc chip",cc)
})

ccDecreaseBtn.addEventListener("click", function(){
    if(total > 0){
        total--
    } 
        updateTotal(`${total}`)
        console.log(total)
})

function updateCc(displayQuantityCc) {
    let quantityCc = document.getElementById("qty-cc")
    quantityCc.innerHTML = displayQuantityCc
}

sugarPlusBtn.addEventListener('click', function(){
        sugar++
        quantityTotal++
        updateSugar(`${sugar}`)
    console.log("sugar", sugar)
})

sugarPlusBtn.addEventListener('click', function(){
    total++
    updateTotal(`${total}`)
console.log(total)
})

sugarDecreaseBtn.addEventListener("click", function(){
    if(sugar > 0){
        sugar--
        quantityTotal--
    } 
        updateSugar(`${sugar}`)
        console.log("sugar", sugar)
})

sugarDecreaseBtn.addEventListener("click", function(){
    if(total > 0){
        total--
    } 
        updateTotal(`${total}`)
        console.log(total)
})

function updateSugar(displayQuantitySugar) {
    let quantitySugar = document.getElementById("qty-sugar")
    quantitySugar.innerHTML = displayQuantitySugar
}

function updateTotal(displayQuantityTotal){
    let quantityTotal = document.getElementById("qty-total")
    quantityTotal.innerHTML = displayQuantityTotal
}