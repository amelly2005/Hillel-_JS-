// function Set time aut - маэ два параметри:
// 1.  callback function (()=>{} "другий параметр це час" 100000 секунд )

const { resolve } = require("path")

// const { promises } = require("dns")

// let func = function(callback){
//     setTimeout(()=>{
//         console.log("3 second")
//         callback()

//     },3000)
// }



// let func_2 = function(){
//     setTimeout(()=>{
//         console.log("2 second")

//     },5000)
// }

// func(func_2)

// PROMISES 
// - promises have three states :
// 1. Pending _ when programme is waiting same resalt 
// 2. Resolved - when programme have ansver or result 
//3. Reject - when programme has  some error process 

// Creats promises 
let promiseFunction = function () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("result 5 second")
        },3000)

    })
}
// let result = promiseFunction()
// console.log(result)

// setTimeout(()=>{ console.log(result)},5000)
//  OR 

// console.log(promiseFunction().then((data)=>{
// console.log(data)
// }))

// .then  for execute result
// .catch - for error

//------ Async -----


let asyncFunc = async function(){


  let res =  await promiseFunction()
  console.log(res) }
  
asyncFunc()