// 1. Write a function that takes two numbers and returns their sum,
//  difference, product, and quotient using arithmetic operators
function names(num1,num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;


    return `     sum :${sum}
    difference :${difference}
    product: ${product}
    quotient: ${quotient}`
}
 let result = names(9,8);
 
 console.log(result);
