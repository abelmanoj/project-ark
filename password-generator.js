const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordPlaceHolder1El = document.getElementById("password-placeholder1")

let passwordPlaceHolder2El = document.getElementById("password-placeholder2")

let isActive = false

function randomNumberGenerator() {
    for (let i = 0; i < 16; i++) {
        let randomNumGen = Math.floor(Math.random() * 91) // 90
        return randomNumGen
    }
}


function triggerPassword() {
    isActive = true
    makePassword1() 
    makePassword2()
}

function makePassword1() {
    passwordPlaceHolder1El.textContent = ""


    for (let i = 0; i < 16; i++) {
        let firstSelection = characters[randomNumberGenerator()]
        passwordPlaceHolder1El.textContent += firstSelection
    }

}

function makePassword2() {
    passwordPlaceHolder2El.textContent = ""

    for(let i = 0; i < 16; i++) {
        let secondSelection = characters[randomNumberGenerator()]
        passwordPlaceHolder2El.textContent += secondSelection
    }
}

