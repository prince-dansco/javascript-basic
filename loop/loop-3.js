//  Create a program that calculates the sum of all even numbers from 1 to 100 using a `for` loop and the `continue` statement.

let num = 0;
for (let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        num += i
        continue;
    } 
}
console.log(num);
