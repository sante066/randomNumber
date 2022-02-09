function generateRandomNumber() {
    return Math.floor(Math.random() *10) +1;
}

function getInputValue() {
    let val = document.getElementById("textField") .value;
    let res = compare(generateRandomNumber().toString(), val);
    console.log(res);
    resultNumber(res);   
}

function compare(randomNumber, inputValue) {
    console.log(randomNumber, inputValue);
    let result = "";
    if (randomNumber !== inputValue) {
        result = "You are Wrong"
    } else {
        result = "You are Right"
    }
    return result;
}

function resultNumber(value) {
    document.getElementById("resultField").innerHTML = value;
}