const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const btn=document.querySelector("form button");
const msg=document.querySelector(".msg");

window.document.addEventListener("load",()=>{
    updatexchangerate();
});
for (let select of dropdowns) {
    for (let code in countryList) { // Declare code with let
        let newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;
     
        if (select.name === "from" && code === "USD") {
            newoption.selected = "selected";
        } else if (select.name === "to" && code === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }

select.addEventListener("change",(evt)=>{ // eventlistener me evt object hoti hai 
updateflag(evt.target);
})
}
const updateflag = (element) => {
    console.log(element);
    let code = element.value;
    let countrycode = countryList[code]; // Use square brackets to access the value
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();//method in JavaScript is used to cancel the default action that belongs to an event.
    updatexchangerate(); 
});

const updatexchangerate=async ()=>{
    
let amount=document.querySelector(".amount input");
let amountval=amount.value;
console.log(amountval);
if(amountval===""|| amountval<1){
    amountval=1;
    amount.value="1";
}
console.log(fromcurr.value,tocurr.value); // USD INR
const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
console.log(response);
let data=await response.json();
console.log(data);
let rate=data[tocurr.value.toLowerCase()];
console.log(rate);
let finalamount=amountval*rate;
msg.innerText=`${amountval} ${fromcurr.value}=${finalamount} ${tocurr.value}`;
};