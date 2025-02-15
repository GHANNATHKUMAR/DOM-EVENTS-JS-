document.querySelector("h4").innerText="from Apna College students"; // for changing we  should have class or id or tag or using tree we can also change 
let vh=document.querySelector("h2");
console.dir(vh);
vh.innerText="my name is ghannath kumar";
vh.innerText=vh.innerText+"also chhotu kumar is additional name ";

let divs= document.querySelectorAll(".box");
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";
// we can change with loops by using learnt concept in array   which  i have learned in js 
let idx=0;
for(divs of divs){
    divs.innerText="new value in box is now ${idx}";
    idx++;
}
