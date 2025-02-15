let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);// 26
}
let div=document.querySelector("div");
div.onmouseover=() =>{
    console.log("you are inside div");
}
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);// 26
} 

btn1.addEventListener("click",()=>{
    console.log("buutons was clicked");
});

btn1.addEventListener("click",(evt)=>{
    console.log("buutons was clicked  * handler2");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);// 26
});
btn1.addEventListener("click",()=>{
    console.log("buutons was clicked");
});
btn1.addEventListener("click",()=>{
    console.log("buutons was clicked");
});
 let v1=()=>{
    console.log("buutons was clicked");
};
btn1.addEventListener("click",v1);
btn1.addEventListener("click",()=>{
    console.log("buutons was clicked");
});
btn1.removeEventListener("click",v1); // the callback reference should be same to remove 


