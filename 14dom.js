const x = document.querySelector(".i1");
let y = document.querySelectorAll(".button");
let r="";// r is a string
y.forEach((w) => {
    w.addEventListener("click", () => {
if(w.innerText=="="){
        r=eval(r);
        x.value=r;
     }  
    else if(w.innerText=="C"){
        r="";
        x.value=r;
     }
     else{
        r=r+w.innerHTML;
        x.value =r;
     }
    });
});
    