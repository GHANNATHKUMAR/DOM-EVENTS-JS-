function api(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log("weather data");
      resolve(200);// 200 is for  successful call
      },2000);
    });
  }
 (async function getweatherdata(){
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
  })(); // so using IIFE itself will call and execute
  // but we cannot use it again , for that we have to copy again // so it is the disadvantage 
  // we use generally in async and ek hi baar use karna hai usme 
  