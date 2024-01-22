//реалізувати реверс стрінги (вивод в зворотньому порядку) reverse("Ihor") => "rohI"

function reversingStrings(str)
{
    return str.split ("").reverse().join("") // first we need convert str to aray (use .split), after we can use method revers and convert to string with "join" 
                                          
}
console.log(reversingStrings("I love Pug"))



//реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)

 
function checkPalidrom(str) {
  strReverse = str.split("").reverse().join("")
  if (str === strReverse)
   {
     console.log ("Cool, it's palindrom")
  } 
   else 
   {
      console.log  ("hm,no, it's error")
   }
} 
let str = "anna"
checkPalidrom(str)



//вивести тільки парні числа з масиву, вивести в зворотньому порядку getPaired(new Array(1,2,3,4,5,6)) => [6,4,2]

function returnPaire (yourArray){
  let evelNum = yourArray.filter(number => number%2 ===0).reverse()
  return evelNum
}
let x = [2, 23, 71, 0, 1, 46, 822, 545165677]
console.log (returnPaire(x))
