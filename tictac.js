let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true; 
    count=0;
 enableboxes();
 msgcontainer.classList.add("hide");
 };


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       
        if(turn0){ // it means if turn0 === true  //player 0
            box.innerText="O";
            box.style.color="blue";
           turn0=false; 
        }
        else{//player x
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if (count === 9 && !iswinner) {
            gameDraw();
          }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };
const disableboxes=()=>{
    for(let box of boxes){
       box.disabled=true; 
    }
};
const enableboxes=()=>{
    for(let box of boxes){
       box.disabled=false; 
       box.innerText="";//empty
    }
};
const showwinner = (winner)=>{
msg.innerText=`congratulations,winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
        
let posn1val=boxes[pattern[0]].innerText;
let posn2val=boxes[pattern[1]].innerText;
let posn3val=boxes[pattern[2]].innerText;
if ( posn1val !="" && posn2val !=""&& posn3val !=""){
if ( posn1val === posn2val && posn2val === posn3val ){
console.log("winner",posn1val); // you can remove this 
showwinner(posn1val);
return true;
}
}
}
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

