// export function Person(fullName, favColor) {
// function Person(fullName, favColor) {
//     this.name = fullName;
//     this.favColor = favColor;
//     this.greet = function() {
//         console.log('hello, my name is ' + this.name + ' and my favourite color is ' + this.favColor + '.');
//     };
// }
// 
// module.exports = Person;

// export class Person {
class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favColor = favColor;
    }

    greet() {
        console.log('hello, my name is ' + this.name + ' and my favourite color is ' + this.favColor + '.');
    };
}

export default Person;