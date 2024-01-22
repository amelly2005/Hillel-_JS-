function addNumP(x,y) // main functon
{ //nested 
    function showMassageD(text)
    {
        console.log(text)
    } 
    //invoking nested f-n 
    let sum =x+y 
    showMassageD("sum is"+ sum )
}
console.log(addNumP(3,5))

// приклад 2 

let abc = function () {
    console.log("function")
    return function(name){
        console.log("inside function" + " " + name)
    }
}
abc ()("Lena")

//приклад з дефолтним значенням 
let abm = function (name = "Olenka") { // default name 
    console.log("function" + " "+ name)
    return function(name){
        console.log("inside function" + " " + name)
    }
}
abm ()("rita") //function Olenka,(має дефолтне значення)  inside function rita (має значення яке надали)
