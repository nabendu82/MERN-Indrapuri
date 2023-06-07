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
console.log(lang[2]);

lang.pop();
lang.pop();
console.log(lang);

lang.push('Pascal');
lang.unshift('Kotlin');
console.log(lang);

lang.shift();
console.log(lang);

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
for(let i=0; i<posts.length; i++){
    console.log(posts[i].id)
}

//for..of loop
for(let item of posts){
    console.log(item.title)
}

//forEach 
posts.forEach(item => console.log(item.body))