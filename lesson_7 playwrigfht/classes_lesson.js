 // create clases 
 class Emaile {
    constructor (name, things,digit){
        this.name = name;
        this.things = things;
        this.digit = digit;
    }
 } 

  // create object based on the classe

  let newEmaile = new Emaile("alise", "$", 6)

 // console.log(newEmaile)  //Emaile { name: 'alise', things: '$', digit: 6 }

// Наслідування класів 
 // cheeldren  class

 class Person extends Emaile{
    constructor(age, name, things,digit){
        super(name, things,digit)             // передаем значеня батківського з класу "імя " " знаки"
        this.age = age;
         
       
    }
 }

  let newClient = new Person(35 , "lisa", "&", 54 )

 

 /* console.log(newClient.age)
 


  function test ( ){
    console.log(this);

  }
  test();
*/

let person ={
    first: 'Andriy',
    last: ' Bohomaz',
    full: function(){
        console.log( this.first +  this.last);
        console.log (this)
    }
}
person.full();


function addNumber(c, d) {
    console.log ( this.a + this.b + c + d);
}
 let ten = {a:1, b:4};
 addNumber.call(ten,5,6 ) //16
 addNumber.apply(ten, [5,6]) //16
 addNumber.bind(ten,5,6 )
