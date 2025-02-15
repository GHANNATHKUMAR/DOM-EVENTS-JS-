 // you are creating a website for your college 
 // create a class user with 2 properties , name and email. it also has a method called viewdata() that allows user to view website data 
let data="secret information";
 class user{
    constructor(name,email){
this.name=name;
this.email=email;
    }
    
   viewdata(){
    console.log("data= ",data);
   } 

 }
 let student1=new user("shardaha","abc@gmail.com");
console.log(student1);
 student1.viewdata();
 console.log(student1.viewdata());
 console.log(student1.viewdata);
 let student2=new user("ghannath","ghannath@gmail.com");
 let teacher=new user("dean","dean@gmail.com");


 // create a new class admin which inherits from user. Add a new method called editdata to admin that allows it to edit website data 
 class admin extends user{
    constructor(name,email){
        super(name,email);
    }
editdata(){
    data="some new value";
}
 }
let admin1=new admin("admin","admincollege@gmail.com");
console.log(data);
admin1.editdata(); // after edit data 
console.log(data);




 // now topic 
 //error handling in js
 let a=5; 
 let b=9;
 console.log("a+b =" ,a); 

// sobelow is error handling and in console you can see error 
 try{
console.log("a+b =" ,a+c); // error 
 }
 catch (err){
    console.log(err);
 }
 console.log("a+b =" ,a+b);
 let d="3"+5;// 35
 d=d+1;//351
 console.group(d+1);//3511