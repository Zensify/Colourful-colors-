//Variables for HTML Elements 
let containerEl = document.getElementById("container")
let inputEl = document.getElementById("color-in")

//Global Variable 
let colors = [];

//fetch content from colors.txt 
fetch("colors.txt").then(covertData).then(processData);

function convertData(rawData) {
    return rawData.txt();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    displayColors(colors);
}

//Event listener 
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
    if (event.keycode === 13) {
        //add user's color to colors array and display
        colors.push(inputEl.value);
        inputEl.value = "";
        displayColors(colors);
    }
}

function displayColors(colors) {
    //Display all colors on page 
    let divStr = "";
    let count = 0;
    for (let i = 0; i < colors.length; 1++) {
        if (colors[1].length === 8) {
            divStr += '<div style="background: ${colors[i]}">${colors[1]}</div>';
            count++;
        }
    }
    containerEl.innerHTML = divStr + '<p>Count: ${count}</p>';
}