const startButton=document.querySelector(".startButton");
const statusLabel=document.querySelector("#status");
const restartButton=document.querySelector(".restartButton");
const cells=document.querySelectorAll(".cell");

const winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let wins=false;
let options=["","","","","","","","",""];
let currentPlayer='X';


startButton.addEventListener("click",()=>{
    startButton.style.display="none";
    statusLabel.style.display="inline";
    restartButton.style.display="inline";
    start();    
});


const start=()=>{
    if(!wins){
        cells.forEach((cell)=>{
            cell.addEventListener("click",cellClick);
        })
    }
};


function cellClick(){
    if(!wins){
        const index=this.getAttribute("index");
        if(options[index]!="" ){
            return
        }
        else{
            options[index]=currentPlayer;
            this.textContent=currentPlayer;
            checkWinner();
        }
    }
     
}

const checkWinner=()=>{
    for(i=0;i<winConditions.length;i++){
        const condition=winConditions[i];
        const tempA=options[condition[0]];
        const tempB=options[condition[1]];
        const tempC=options[condition[2]];
        if(tempA==""||tempB==""||tempC==""){
            continue
        }
        if( tempA==tempB && tempB==tempC)
        {
          statusLabel.textContent=`${currentPlayer} Won`;

            wins=true;
            break;
        }}
       if(!wins) {
            currentPlayer=(currentPlayer=="X")?"O":"X";
            statusLabel.textContent=`${currentPlayer}'s Turn`
        }
    }

    restartButton.addEventListener("click",()=>{
        cells.forEach((cell)=>{
            cell.textContent="";
        })
        options=["","","","","","","","",""];
        currentPlayer='X';
        statusLabel.textContent=`${currentPlayer}'s turn`
        wins=false;
          

        
       }

    )




