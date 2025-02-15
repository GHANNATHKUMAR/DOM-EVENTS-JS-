function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("weather data");
    resolve(200);// 200 is for  successful call
    },2000);
  });
}
async function getweatherdata(){
    console.log("getting data 1........");
    await api();  // first call
    console.log("getting data 2........");
    await api();// second call but after completing  first call 
    console.log("getting data 3........");
    await api();
    console.log("getting data 4........"); 
    await api();
    console.log("getting data 5........");
    await api();
    console.log("getting data 6........");
    await api();
    console.log("getting data 7........");
    await api();
    // uske liye pichle example ke liye async function me -> await getData(2); 
}
getweatherdata(); // called getweather function 
// so now very easy to read
// so async await is generally used  or (.catch and .then)
// but we have to use only one not both 
// also we have to make function  and  call at last function in Async-await 
// so function se bachne ke liye  IIFE ka use karna hoga 

