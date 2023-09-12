
// / Objects and Object Methods:**

// 15. Create an object representing a person with properties like name, age, and gender. Write a function
//  that displays the person's information.

function showDetail(person) {
    let Detail = {
        name:"lord Princewill",
        age: 12 ,
        gender: "mail"
    }
    return Detail;
}
// let result = showDetail("Detail");
// console.log(result)

// OR
function showDetail(firstName, lastName, age, gender) {
    let Detail = {
        fullName: `${firstName} ${lastName}`,
        age: `${age} years old`,
        gender: `${gender}`
    }
    return Detail;

}
let result = showDetail("lord", "Princewill", 12, "mail")
// console.log(result);
