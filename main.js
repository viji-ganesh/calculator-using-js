
const display = document.getElementById("inputbox");

function validate(input){
    display.value += input;
}

function clearall(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}