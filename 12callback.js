//data1
//data2
//data3
function getData(dataid,getnextdata){
    setTimeout(()=>{
    console.log("data",dataid);
if(getnextdata){
getnextdata();
}
}
,2000);}
console.log(getData(23));

// getData(1,getData(2));  
//callback hell
getData(1,()=>{

    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    })
}); // so now i have used callback , after 2s data 1 will come and then again 2s delay  data2 will come 





