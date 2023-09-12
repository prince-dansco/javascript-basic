// Switch Statements
// . Create a program that asks the user to enter a day of the week 
// (e.g., "Monday"). Use a switch statement to display a message based on the day
//  entered (e.g., "It's a workday" for Monday, "It's the weekend" for Saturday and Sunday).
let day = "Sunday";
switch (day) {
    case "Monday":
        console.log("It's a workday")
        break;
    case "Tuesday":
        console.log("It's a workday")
        break;
    case "Wednessday":
        console.log("It's a workday")
        break;
    case "Thurday":
        console.log("It's a workday")
        break;
    case "Friday":
        console.log("It's a workday")
        break;
    case "saturday":
    case "Sunday":
       console.log("It's the weekend")
        break;
    default:
        console.log("it a new week")
        break;
}