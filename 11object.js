const student={
    fullname: "ghannath",
    marks: 98,
    printmarks: function(){
        console.log("marks =",this.marks); // this means object // same as student.marks 
    }
};



const employee={ // this is object 
    caltax1(){
        console.log("tax rate is 10%");
    }, // this is good defining generally 
    caltax2:function(){
        console.log("tax rate is 10%");
    }
     // both method is working for definining function
};
const  karanarjun={
    salary:5000,
};
const  karanarjun2={
    salary:5000,
};
const  karanarjun3={
    salary:5000,
};
const  karanarjun4={
    salary:5000,
    caltax1(){
        console.log("tax rate is 20%");
    },
};
 karanarjun.__proto__=employee; // use karna chahte hain employee object ke function ko  ko  toh dura vala ke prototype me set kar denge 
 karanarjun.caltax1();
 karanarjun2.__proto__=employee;  // yahan bhi you can use function of employee and can use in it  and tax can be applied on karanarjun 2 also 
 karanarjun3.__proto__=employee; 
 karanarjun4.__proto__=employee;
 karanarjun4.caltax1(); // now 20% will be priority becuase if object and prototype have same method then object method will be preferred



class toyotocar{
start(){
    console.log("start");
}
stop(){
    console.log("stop");}

    setbrand(brand) {
        this.brandName=brand;// generally use this.brand=brand; but be careful that brand in L.H.S SIDE AND IN R.H.S SIDE IS DIFFERENT // brand is used for each individual object  // brandname and brand both are different variable 
        // brandname is for object and brand for argument 
    }
}

let  fortuner=new toyotocar(); // apna object ka create karne ka tarika using class 
// upar vala class tha ab object bana liye  // fortuner jo toyotocar template pe bani hui hai  // ab object banne ke bbad  jisme do function start and stop use kar sakte hain 
console.log(typeof fortuner); // object   
fortuner.start();//  start 
fortuner.stop(); // stop 
fortuner.setbrand("fortuner1");  // dso this means object fortuner here jiske liye call kiya ja raha hai  // now  fortuner ke andar 
let lexus=new toyotocar();
lexus.setbrand("lexus");
 // SO CLASS IS USED WHEN SAME TEMPLATE KE UPAR MULTIPLE OBJECT BANANE HO  // TOH BAR BAR FUNCTION DEFINE KARNE SE ACHHA HO KI OBJECT BANA LO
 // JAISE BANK KE EMPLOYEES KE DATA STORE KARANA CHAHTE HO TOH KYA KARENGE KI  EK EMPLOYEE  NAME KA CLASS BANA LENGE , INFORMATION DAAL DENGE // FIR HAREK EMPLOYEE KE LIYE OBJECT CREATE KAR DENGE 

class boyotocar{
    constructor(brand,milage){ // by default it crete 
        // it is used when object first time create ho rahi hai aur kuchh kam karwana hai toh 
        console.log("creating new objcet");
        this.brand=brand;
        this.milage=milage;
    }
start(){
    console.log("start");
}
stop(){
    console.log("stop");}

    setbrand(brand) {
        this.brandName=brand;}
}
let  newfortuner=new boyotocar(); // in this brand will come undefined 
let  newfortuner1=new boyotocar("lexusvan" ,"13");
console.log(newfortuner1.brand);  
new newfortuner1.constructor();  // without new constructor will not work
newfortuner1.start(); 
console.log(newfortuner);








//  now we will learn inheritannce  in js 
//  in  also java and c++ , class and object 
class parent {
    hello(){
        console.log("hello");
    }
}
class child extends parent {}
let obj=new child();
console.log(obj.hello());
// code ko short karna object oriented programming kahlata hai 




class person{
    constructor(){
        console.log("enter parent constructor");
this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        condsole.log("sleep");
    }
    work(){
        console.log(" do nothing ");
    }
}
class engineer extends person{
    work(){
        console.log("solve problems ,build something1");// child function will be preferred if same function in parent and child 
    }
}
let shardaobj=new engineer();
class doctor extends person{
    work(){
        console.log("treat patients");
    }
}
let ghannathdoctorobj=new doctor();
let p=new person();







class engineer1 extends person{
    constructor(branch){
        console.log("enter child constructor");
super(); // to invoke parent class constructor  // varna chemical engineer will not be set up 
this.branch=branch;
console.log("exit child  constructor");
    }
    work(){
        console.log("solve problems ,build something");// child function will be preferred if same function in parent and child 
    }
}
let engobj1=new engineer1("chemical engg");
engobj1.work();
engobj1.eat();


class person1{
    constructor(name){
        console.log("enter parent constructor");
this.species="homo sapiens";
this.name=name;
    }
    eat(){
        console.log("eat");
    }}

    class engineer2 extends person{
        constructor(name){
    super(name); }
    work(){
        super.eat(); // eat method ko call ke liye yahan par 
        console.log("solve problems ,build something");
    }}
        
    let engobj2=new engineer2("sharadha"); // name 
