// Write a function that finds the largest number in an array of numbers using a loop.

// function largestNum(arr) {
    // if(arr){
    //  console.log(Math.max.apply("",arr) + " is the largest number in the arr")
    // }
//  }
//  largestNum([2,45,67,89,0,23,56,89,56])


//  OR 

// function largestNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        return Math.max(...arr);
//     }
// }

// let arr = [2,45,67,87,0,23,56,80,90,56];
// console.log(largestNum(arr));


function largestNum(arr) {
 let maxnum = 0;
 let  minnum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > minnum && arr[i] > maxnum){
            maxnum = arr[i];
            continue;
        }
    }
    return  `this is the largest number ${maxnum}`
}
let arr = [2,45,67,87,0,23,400,56,80,90,56,];
console.log(largestNum(arr));
