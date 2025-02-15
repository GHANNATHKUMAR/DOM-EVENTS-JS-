function getData(dataid){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
           resolve("success");
    },5000);
});
}
console.log("getting data1........");
getData(1).then((res)=>{
    console.log("getting data2........");
    return getData(2);
}) // no semicolon use here because it is not end 
.then((res)=>{
    console.log("getting data3........");
    return getData(3);
})
.then((res)=>{
    console.log("getting data4........");
    return getData(4);
})
.then((res)=>{
    console.log(res);
}); // but also  confusing ,so go into Async-Await 