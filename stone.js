let x=0; // x is userscore 
let y=0;// y is comp score 
let v=0; // v for draw
const z=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore1=document.querySelector("#user-score");
const compscore1=document.querySelector("#comp-score");
const drawscore1=document.querySelector("#draw-score");
const resetbtn=document.querySelector("#reset");
const resetgame=()=>{
    x=0;
    y=0;
    v=0;
    userscore1.innerText=x;
    compscore1.innerText=y;
    drawscore1.innerText=v;
    msg.innerText="play your move";
};



const gencompchoice=()=>{
//rock , paper,scissors
const options=["rock" ,"paper" ,"scissors"];
const randmidx=Math.floor(Math.random()*3); // math.random
return options[randmidx];
};


const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    console.log("you win!");
    msg.innerText=`you win.! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="red"; // c is big 
    msg.style.color="aqua";
    x=x+1; 
    userscore1.innerText=x; // important
}
else{
    console.log("you lose");
    msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="blue";
    msg.style.color="red";
    y=y+1; 
    compscore1.innerText=y;
}
};



const playgame=(userchoice)=>{
    console.log("userchoice",userchoice);
const compchoice=gencompchoice();
console.log("compgenchoice",compchoice);
if(userchoice===compchoice){
    // draw game 
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        // scissors,paper
        userwin=compchoice==="paper"? false:true;
    }
    else if(userchoice==="paper"){
       // rock,scissors
        userwin=compchoice==="scissors"?false:true;
    }
    else{
        // rock,paper
        compchoice==="rock"?false:true;
    }
showwinner(userwin,userchoice,compchoice);
    }
};

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="aqua";
    msg.style.Color="black";
    v=v+1;
drawscore1.innerText=v;
};
z.forEach((w)=>{
    w.addEventListener("click",()=>{
console.log(w);
const userchoice=w.getAttribute("id");
playgame(userchoice);
    })
})
resetbtn.addEventListener("click",resetgame);

