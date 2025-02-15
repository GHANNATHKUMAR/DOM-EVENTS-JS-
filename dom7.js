let newbutton=document.createElement("button");
newbutton.innerText="click me! ";
newbutton.style.backgroundColor="Red";
newbutton.style.Color="white";

document.querySelector("body").prepend(newbutton);
document.querySelector("button").style.backgroundColor="blue";
let newpara=document.createElement("p");
newpara.innerText=" how are you ";
document.querySelector("button").after(newpara);
document.querySelector("p").id="para1";
newpara.className="para";
document.querySelector("p").setAttribute("class","newclass");
// with new class  also old styling with old class will be  aslo removed

document.querySelector("p").classList.add("mewclass");
// but with classlist .add with old styling of old class and with new class is added with overwriting of style 




