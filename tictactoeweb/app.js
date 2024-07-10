let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset-btn");
let newGamebutton = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true;           //true for O and false for X

const winnerPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{

    if(turnO){
        
        box.innerText = "O";
        turnO=false;
    }
    else{
        box.innerText = "X";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
    });
});

const checkWinner=()=>{
    for(pattern of winnerPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if( pos1val!="" && pos2val!="" && pos3val!="" ){
            if(pos1val===pos2val && pos1val===pos3val){
                congratWinner(pos1val);
                
            }

        }

    }

};

const checkDraw = () =>{
    for(pattern of winnerPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if( boxes!="" ){
            console
    }
}
}

const congratWinner = (winner) =>{
    msg.innerText = `Congratulations, The WINNER is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
};

const resetbtn = () =>{
    turnO = true;
    msgcontainer.classList.add("hide");
    enableboxes();
};



resetbutton.addEventListener("click", resetbtn);
newGamebutton.addEventListener("click", resetbtn);