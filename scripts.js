const startButton=document.querySelector(".startButton");
const statusLabel=document.querySelector("#status");
const restartButton=document.querySelector(".restartButton");


startButton.addEventListener("click",()=>{
    console.log("hiii")
    statusLabel.style.display="inline";
    startButton.style.display="none";
    restartButton.style.display="inline"


})