
// Implement a program that continuously asks the user to enter 
// a number until they enter 0. Use a `while` loop for this task

let usernum = 5;
while (usernum) {
    usernum = prompt("enter number")
if (usernum > 0 || usernum < 0) {
    console.log("you are on the right track");
}else{
    break;
}

}