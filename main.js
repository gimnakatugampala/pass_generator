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

// Generate Event
generateEl.addEventListener('click',()=>{

    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultsEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol);
});

// Generate Password function
function generatePassword(lower,upper,number,symbols,length){
    //  1. Init pw var
    //  2. Filter out unchecked types
    //  3. Loop over length call generator function for each type
    //  4. Add final pw to the pw var and return  

    let generatedPassword = '';

    const typeCount = lower + upper + number + symbols;

    console.log('typeCount:', typeCount);

    const typesArr = [{lower},{upper},{number},{symbols}];

    console.log(typesArr);
}

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