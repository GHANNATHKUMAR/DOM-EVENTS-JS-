let div1=document.querySelector("div");
console.log(div1);
let id1=div1.getAttribute("id");
console.log(id1);
console.log(div1.getAttribute("name"));
div1.setAttribute("class","newclass");
document.querySelector("div").style.backgroundColor="green";
let x=document.querySelector("div");
x.style.backgroundColor="Red";
let y=document.querySelector("div").style;
y.backgroundColor="blue";
div1.style.fontSize="26px";
// div1.style.visibility="hidden"; element inside div1 wii be hidden 
div1.innerText="ghannath";
