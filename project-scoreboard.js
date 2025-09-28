let count = 0
let count2 = 0
let num1El = document.getElementById("numHome-el")
let num2El = document.getElementById("numGuest-el")

function incrementHomePlus1() {
    count += 1
    num1El.textContent = count
}

function incrementHomePlus2() {
    count += 2
    num1El.textContent = count
}

function incrementHomePlus3() {
    count += 3
    num1El.textContent = count
}

function incrementHomeMinus1() {
    count -= 1
    num1El.textContent = count
}

function incrementHomeMinus2() {
    count -= 2
    num1El.textContent = count
}

function incrementHomeMinus3() {
    count -= 3
    num1El.textContent = count
}

function incrementGuestPlus1() {
    count2 += 1
    num2El.textContent = count2
}

function incrementGuestPlus2() {
    count2 += 2
    num2El.textContent = count2
}

function incrementGuestPlus3() {
    count2 += 3
    num2El.textContent = count2
}

function incrementGuestMinus1() {
    count2 -= 1
    num2El.textContent = count2
}

function incrementGuestMinus2() {
    count2 -= 2
    num2El.textContent = count2
}

function incrementGuestMinus3() {
    count2 -= 3
    num2El.textContent = count2
}

function resetUniversalScore() {
    count = 0
    count2 = 0
    num1El.textContent = count
    num2El.textContent = count2
}









