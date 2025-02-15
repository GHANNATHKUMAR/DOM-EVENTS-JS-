
document.body.children[0].innerText="abcd";
document.body.children[0].innerHTML="<p>how are you </p>";
let b=document.querySelector("h2");
console.log(b);
console.log(b.innerText); // hidden content will not show here 
console.log(b.textContent);// but here  hidden content will also show therefore tetContent is important 