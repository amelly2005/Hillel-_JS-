// проста Функція  

function Square (number){   // Square - function's name
                            // ((number) - function's parameter
    return number *number;  //  return - інструкція яку повина виконувати функція
}
console.log(Square(568));     // виклик функції

// функція без імені :

var square  = function (number) { // присвоюємо до переміної square функцію 
return number*number // функція повертає число у квадраті 
}
var x = square(4) //  переміна х дорівнює  переміній  square  у квадраті 
console.log(x) 

// функція яка визиває сама себе 

var factorial = function fac (n){
    return n < 2 ? 1:n * fac(n-1);
}
console.log(factorial(7))

// функції підняті чи хостинг функцій 
console.log (square(32)); // спочатку визиваємо функцію 

function square(n){  // а після вже строчки визаву прописуємо що містить ця функція
    

return n*n;
    
}
