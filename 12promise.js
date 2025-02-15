// let promise=new Promise((resolve,reject)=>{
// console.log("i am a promise");
// });



function getData(dataid,getnextdata){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
           resolve("success");
        if(getnextdata){
        getnextdata();
        }
        }
        ,5000);
})
}
 

let finalval=getData(123);// let promise=getData(123);//finalval  means promise nmano us variable ko 
const getpromise=()=>{
    return new Promise ((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
    });
};
let promise=getpromise();
promise.then(()=>{
console.log("promise fulfilled");
});

const getpromise1=()=>{
    return new Promise ((resolve,reject)=>{
        console.log(" i am a promise1");
        resolve("success1");
    });
};
let promise1=getpromise1();
promise.then((res)=>{
console.log("promise fulfilled1",res);
});

const getpromise2=()=>{
    return new Promise ((resolve,reject)=>{
        console.log(" i am a promise2");
        reject("error1");
    });
};
let promise2=getpromise2();
promise.catch((err)=>{
    console.log("rejected",err);
});








