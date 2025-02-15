async function getdata(){
    let x=await fetch('https://jsonplaceholder',{
        method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userID:1,
        }),
        body:JSON.stringify(data),
    })
}