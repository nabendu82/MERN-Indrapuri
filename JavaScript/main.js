//Variables
// var name = "Nabendu";
// let age = 41;
// const isDeveloper = true;
// isDeveloper = false;
// console.log(name);
// console.log(age);
// console.log(isDeveloper);

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp()
// console.log("Outside function var " + num1);


// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

//DataTypes
// const name = 'Nabendu';
// const age = 41;
// const rating = 5.5;
// const isDev = true;
// const x = null;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDev);
// console.log(typeof x);
// console.log(typeof z);

// const y = null;
// if(typeof y === 'object'){
//     console.log('y is null');
// }

//String concatenation
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old');
// console.log(`My name is ${name} and i am ${age} year's old`);

//String methods
// const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.substring(3));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));
// console.log(str.split(' '));
// console.log(str.slice(-4));

//Array
const lang = ['JavaScript', 'Java', 'C++', 'Golang', 5, true];
// console.log(lang[2]);

lang.pop();
lang.pop();
// console.log(lang);

lang.push('Pascal');
lang.unshift('Kotlin');
// console.log(lang);

lang.shift();
// console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('JavaScript'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));
// console.log(lang.join());
// console.log(lang.join(''));
// console.log(lang.join('+'));

//Objects
const person = {
    firstName: 'Nabendu',
    age: 41,
    'is Dev': true,
    hobbies: ['coding', 'blogging', 'teaching'],
    address: {
        hno: 95,
        city: 'Bhopal',
        state: 'MP'
    }
}

// console.log(person.firstName);
// console.log(person['is Dev']);
// console.log(person.hobbies[1]);
// console.log(person.address.state);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//Loops
//For loop

// for(let i=0; i<=10; i++){
//     console.log(`Loop Number - ${i}`)
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`Loop Number - ${i}`);
//     i++;
// }

//Do-While loop
// let i=0;
// do{
//     console.log(`Loop Number - ${i}`);
//     i+=11;
// }while(i<=10)

//Array of objects
const posts = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem "
    },
    {
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius "
    }
]

//Traditional for loop
// for(let i=0; i<posts.length; i++){
//     console.log(posts[i].id)
// }

//for..of loop
// for(let item of posts){
//     console.log(item.title)
// }

//forEach 
// posts.forEach(item => console.log(item.body))

//Conditionals

//if statements
const x = '10';

if(x == 10){ //10 == 10
    console.log('x is 10')
}

//if-else statements
const y = '20';
if(y === 20) {
    console.log('y is 20');
} else {
    console.log('y is string 20');
}

//if-else if-else statements
// const z = 79;
// if(z > 100){
//     console.log('z is greater then 100');
// } else if(z > 80) {
//     console.log('z is greater then 80');
// } else if(z > 60) {
//     console.log('z is greater then 60');
// } else if(z > 40) {
//     console.log('z is greater then 40');
// } else {
//     console.log('z is lesser then 40');
// }

//OR and AND operator 
const c = 20;
const d = 30;

if(c === 20 || d === 40){
    console.log('Any one of the statement is true')
}

if(c === 20 && d === 30){
    console.log('Both of the statement are true')
}

//Ternary operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red'
// } else {
//     color = 'blue'
// }

// console.log(color)

// const color2 = z > 9 ? 'red' : 'blue';
// console.log(color2)

//Switch statement
const color = 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
    case 'yellow':
        console.log('color is blue or yellow');
        break;
    case 'pink':
        console.log('color is pink');
        break;
    default:
        console.log('No color matched');
}

//Functions

//Method#1 - Function decleration
function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(20, 30);

//Method#2 - Function expressions
const multiNums = function(num1, num2){
    return num1 * num2;
}

console.log(multiNums(20, 30));

//Method#3 - Arrow function
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(50, 30));

//Method#4 - Condensed Arrow function
const divNums = num => num / 3;

console.log(divNums(50));

