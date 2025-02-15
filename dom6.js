 let newbutton=document.createElement("button");
 newbutton.innerText="click me here";
 let divs=document.querySelector("div");
 divs.append(newbutton);
 let divs1=document.querySelector("p");
 divs1.after(newbutton);
newbutton.style.backgroundColor="Red";


let newheading=document.createElement("h1");
newheading.innerHTML="<i>GHANNATH KUMAR </i>";
document.querySelector("body").prepend(newheading);
let x=document.querySelector(".p1");
x.remove();
newheading.remove();

