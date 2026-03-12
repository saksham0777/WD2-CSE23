function result(){

    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;

    let changeColor = document.getElementById('text');
    changeColor.style.color = "red";

    let bodyColour = document.getElementsByTagName('body')[0];
    bodyColour.style.backgroundColor = "blue";
}

let para = document.getElementById("paratext");

function changeTextColor(){
    para.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
}
para.addEventListener('mouseover', changeTextColor);