let modbn1=document.querySelector("#mode1");
let body=document.querySelector("body");
let currmode="light";
modbn1.addEventListener("click",()=>{
    if(currmode=="light"){
      currmode="dark";
      body.classList.add("dark");
      body.classList.remove("light");
    }
    else{
      currmode="light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
  });

