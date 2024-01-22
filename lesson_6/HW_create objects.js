//створити 3 обʼєкти через {}
 let dog = {
    breed: "pug",
    color: "black",
    paws: 4,
    name: "Cesar",
    age: 9,
 }

 let cat = {
    name: ['bite', 'kesh'],
    age: [6, 8],
    breed: "Scottish Fold",
    color: "grey",
 }

 let car ={
    brend: "jeep",
    model: "compass",
    yaer: 2021,
    engine: 2.36,
    color: "gray",
 }


//створити 3 обʼєкти через Object()


let lybrary = new Object()
lybrary.type = ["Fantasy", "Horor",],
lybrary.language =["ukr", "eng", "pl"]
//-----------------------------------------------------------------

let family = new Object() 
    family.participants = "mom, dad and son" ,
    family.type  = "full family",
    family.age = 5, 
console.log ( family)
//------------------------------------------------------------------


function Toys ( age, type, material){
    this.age = age
    this.type = type
    this.material = material
}

let doll = new Toys (4, "barby", "plastic")

console.log(doll)
//----------------------------------------------------------------------



//створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), 
//створити одному в кожному форматі
let dogFirst = {
    breed: "pug",
    color: "black",
    paws: 4,
    name: "Cesar",
    age: 9
}

let pupy = {
    name: "flint",
    __proto__:dogFirst,
}
console.log(pupy.color)


let pupy2 = Object.create(dogFirst)
pupy2.color = "white"
pupy2.name = "CLick"

console.log("my dog is " + pupy2.name + " it breed is " + pupy2.breed )


//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)



let engine = {
    age : 87,
    skills: ["JS", "sleeping on work"],
    gender: "femail",
    name: "Unicorn1",
}
for (key in engine){
    console.log(engine[key])
 }
 
let QA_engineer = Object.create(engine)
QA_engineer.hobby = "musik"
QA_engineer.work = "Unicorn company"
QA_engineer.name = 'Monster'

 for (key in QA_engineer){
    console.log(QA_engineer[key])
 }
// console.log(engine.name, engine.age, engine.skills,engine.gender,)
// console.log(QA_engineer.name, QA_engineer.age, QA_engineer.skills, QA_engineer.work)





//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів