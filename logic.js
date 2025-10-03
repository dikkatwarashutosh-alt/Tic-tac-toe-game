let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let result=document.querySelector("#winner");

let turn = 0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn == 0) {
            box.style.color="green";
            box.innerText = "O";
            turn = 1;
            resetbtn.innerText="Reset Game"
        }
        else {
            box.innerText = "X";
            box.style.color = "blue"
            turn = 0;
           
        }

        box.disabled = true;
        checkWinner();
        if(!checkWinner()){
            checkDraw();
        }
        
    })
});


resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        result.innerText="";
    });
    turn=0;
});


function checkWinner() {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

            if(pos1=="O"){
                result.innerText=`${pos1} is wins! 🎉`;
                result.style.color="green";
            }
            else{
                result.innerText=`${pos1} is wins! 🎉`;
                result.style.color="blue";
            }
            
            boxes.forEach((box)=> {
                box.disabled = true
            });
            resetbtn.innerText="New Game";
            return true;
        }
    }
    return false;
}


function checkDraw(){
    let draw=[...boxes].every(box=>box.innerText!=="");
    if(draw){
        result.innerText="It's a Draw! 🤝";
        result.style.color="red";
    }
}


