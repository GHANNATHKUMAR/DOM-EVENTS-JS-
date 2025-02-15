const URL="https://cat-fact.herokuapp.com/facts";

// let promise=fetch(URL); will return promise means response
// console.log(promise);

const X=document.querySelector("#para1");
const y=document.querySelector("#btn");
const getfacts= async ()=>{ // we deal with Promise so 
    let response=await fetch(URL); // data aane me thoda toh time laga hoga 
    console.log(response);//json
    console.log(response.status); // 200 // 200means successful 
    console.log(response.statusText);// OK
    let data=await response.json();
    console.log(data);
    console.log(data[0].text); // this is the actual data and now this data can also be used and print karwa sakte hain on html 
    // toh aise hin joke related api hoti hai ham joke return karwa sakte hain // random  joke ham create karwa sakte hain 
    X.innerText=data[0].text; //  0,1,2,3,4
};

btn.addEventlistener("click",getfacts());
// same thing can be done by below 
// function getfacts(){
//     fetch(URL)
//     .then((response)=>{
// return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factpara.innerText=data[2].text;
//     });
// }
// btn.addEventListener("click",getfacts);