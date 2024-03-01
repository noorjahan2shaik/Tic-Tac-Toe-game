let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX,playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>
{
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

var count =0;
    boxes.forEach((box)=>{     
        box.addEventListener("click",() => { 
        
                if(count<9 && turnO)//playerO turn
                {
                    box.innerText = "O";
                    turnO = false;
                    box.style.color ="black";
                    box.style.backgroundColor = "#f8782e";
                    document.getElementById("turn").textContent = "Now x turn!";
                }
                else{
                    box.innerText = "X";
                    turnO = true;
                    box.style.color ="black";
                    box.style.backgroundColor = "#17bd08";
                    document.getElementById("turn").textContent = "Now 0 turn!";
                }
                box.disabled = true;
                count = count +1;        
                checkWinner();
        });
    });
    const disableButtons = () =>
    {
        for(let box of boxes)
        {
            box.disabled = true;
        }
    }
    const enableButtons = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
            box.style.backgroundColor = "white";
        }
        count =0;
        document.getElementById("turn").textContent = "first 0 turn!";
    }
    function showWinner(winner)
    {
        msg.innerText = `Congratulations,Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableButtons();
    }
    
    
    function gameDraw()
    {
        msg.innerText = `Game Draw!`;
        msgContainer.classList.remove("hide");
        enableButtons();
    }
    function checkWinner()
    {
        if(count < 9)
        {
            for(let pattern of winPatterns)
            {
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;

                if(pos1Val != "" && pos2Val != "" && pos3Val != "")
                {
                    if(pos1Val == pos2Val && pos2Val == pos3Val)
                    {
                        showWinner(pos1Val);
                        break;
                    }
                }
            }
        }
        else{
        gameDraw();
        }

    };

    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);
    
