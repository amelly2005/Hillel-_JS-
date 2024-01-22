 // i - це порядковий  номер аргументу 
 // і починає відрахунок з 0 ["квітка","дерево ","дім"," слон"] квітка  = 0, дерево =1 і так далі 
 //отримати кількість усіх аргументів - arguments.leght 
 // Приклад 

 /*
 function myConcat(separator){
    var result = "";
    var i ;

    for (i=2; i<arguments.length; i++ ){
        result += arguments[i] + separator;
    }
    return result
 }
 console.log(myConcat("Lora", "dira", "marks", "luna"))




//---- Rest parametrers---- 
 function multiply(multiplier, ...theArgs){
 
    return theArgs.map((x) =>multiplier*x) // такий самий вираз // return theArg.map (function(x){
                                           // return x*multiplier})
 }
 const arr = multiply (2, 1, 2, 3)
 console.log(arr)

*/

// ----collback functions
let firstFunc = function(){
    console.log("first function")
}
let abc = function (another){
    another()
    console.log( "abc")
}
abc (firstFunc)

/*
function greeting(name){ 
  alert("hello" + name); 
 } // first function 

 function ProccaesUserInput (callbak) {
    var name = prompt("please enter your nammer.");
    callbak(name);

 } //  thecond function is collback first 
ProccaesUserInput(greeting);
*/

