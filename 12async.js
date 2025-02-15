console.log("hello");
console.log("hello-hello");
console.log("hi");
function hello(){
console.log("hello");
}
setTimeout(hello,2000);// timeout 2s=2000ms // setTimeout is a basic define function
setTimeout(hello,4000); // 4s
setTimeout(()=>{
    console.log("hello");
},6000); // so function iside me h bana liye  // after 6s baad output aayega 

console.log("three");


function getData(dataId){
    console.log(dataId);
}
console.log(getData(304));
function getData1(dataId){//2s
setTimeout(()=>{
    console.log(dataId);
},5000);
}
console.log(getData1(305)); // after 5s  // so time le raha hai 304 vala data  khojne mein



