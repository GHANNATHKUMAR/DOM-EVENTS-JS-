let modbn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modbn.addEventListener("click",()=>{
  if(currmode=="light"){
    currmode="dark";
    body.style.backgroundColor="blue";
  }
  else{
    currmode="light";
    body.style.backgroundColor="white";
  }
});
