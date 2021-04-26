// DOM Elements
const resultsEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower:getRandomLower,
    uppercase:getRandomUpper,
    number:getRandomNumber,
    sysmbols:getRandomSymbol
}

generateEl.addEventListener('click',()=>{

    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const has

    console.log(typeof length)

})

// Generator Function
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol(){
    const sysmbols = '!@#$%^&*()_+';
    return sysmbols[Math.floor(Math.random() * sysmbols.length)];
}


console.log(getRandomUpper());