// 16. Implement a method within the person object that increments their age by one when called.
let user = {
    name: "Joy",
    age: 16,
    incremetAge() {
        this.age++;
        return this.age;
    }
}
console.log(user.incremetAge())
console.log(user.incremetAge())
console.log(user.incremetAge())