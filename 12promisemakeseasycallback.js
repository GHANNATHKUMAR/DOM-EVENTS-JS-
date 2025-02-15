function getData(dataid){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
           resolve("success");
    },5000);
})
}
getData(1).then((res)=>{ // first data1 request 
    console.log(res); // then print after 5s
    getData(2).then(()=>{ // then seond data request 
        console.log(res);// then print after 5 s
    })
})

