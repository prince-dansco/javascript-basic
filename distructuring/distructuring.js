// Destructuring Assignments:**

//  Given an object representing a book with properties like title, author, and publication
//  year, use destructuring to extract and display these properties.


let Publication = {
    year: 2023,
    month: "july",
    day: "Monday",
    date: 12
}
let book = {
    title: "Javascript Expereince",
    author: "Lord Princewill",
    ...Publication
}
console.log(book);
