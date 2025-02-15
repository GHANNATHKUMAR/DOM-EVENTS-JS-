 let x=document.getElementById("g1"); //h1
 console.log(x);
 console.dir(x);//h1#g1
 let t=document.getElementById("g3"); //h1
 console.dir(t);//null
 let y=document.getElementsByClassName("g2"); //h1
 console.dir(y);//HTML Collection[2]
  let perhaps=document.getElementsByTagName("p");
 console.dir(perhaps);
 let first=document.querySelector(".class1");
 console.dir(first);
 let all=document.querySelectorAll(".class1");
 console.dir(all);
 let first1=document.querySelector(".g2");
 console.dir(first1);
 let all1=document.querySelectorAll(".class1");
 console.dir(all1);
 let first2=document.querySelector("#g1");
 console.dir(first2);
//  let all2=document.querySelectorAll("#g1");
//  console.dir(all2);// not making sense
let all2=document.querySelectorAll("#g1");
console.dir(all2);

let first4=document.querySelector(".g2");
 console.dir(first4);
 console.log(first4);
 console.log(first4.tagName);

 console.dir(document.querySelector("div"));
 console.log(document.body.children[0]);
 console.dir(document.body.children[0]);

 



 console.dir(document.querySelector("div").children[0]);
 console.dir(document.body.children[0].children[0]);
 console.log(document.body.firstChild.nodeName);
 console.log(document.body.lastChild.nodeName);
 console.dir(document.body.children[0].nodeName);
 

 console.dir(document.querySelector("div"));
 console.log(document.body.children[0]);
 console.dir(document.body.children[0]);
 console.dir(document.querySelector("div").tagName); 
 console.log(document.querySelector("div").innerText);
 console.log(document.querySelector("div").innerHTML);
 console.dir(document.querySelector("#div5"));
 console.log(document.querySelector("#div5"));

//  document.body.children[0].innerText="abcd"; for same content see dom3 in same folder 




