function asyncFunc1(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("some data 1");
        resolve("success");
    },4000)
    });
    }
    function asyncFunc2(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("some data 2");
                resolve("success");
            },4000)
            });
            }
// console.log("fetching data1.....");
// let p1=asyncFunc1();
// p1.then ((res)=>{
// console.log(res);
// });
// console.log("fetching data2.....");
// let p2=asyncFunc1();
// p2.then ((res)=>{
// console.log(res);
// }); // but we want first data1 then data2 

console.log("fetching data1.....");
let pa1=asyncFunc1();
pa1.then ((res)=>{ // sabse pahle data 1  fetch hoga tabhi data 2 fetch ho sakta hai 
console.log(res);
console.log("fetching data2.....");
let pa2=asyncFunc2();
pa2.then ((res)=>{
console.log(res);
});
});
 
//above code can be written like below 
// console.log("fetching data1.....");
// asyncFunc1().then ((res)=>{ // sabse pahle data 1  fetch hoga tabhi data 2 fetch ho sakta hai 
// console.log(res);
// console.log("fetching data2.....");
// asyncFunc2().then ((res)=>{
// console.log(res);
// });
// });
