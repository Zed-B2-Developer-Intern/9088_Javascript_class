
/* 

JAVASCRIPT BASICS

*/


// variables : var ,let ,const

let name = 'MK'; 

var Gender = 'male';

const pi = 3.14; 

let alive = true;

info = `Name: ${name} ${Gender}`

console.log(info);

// operators : add,sub,mul,div,ternary
let a = 50;
let b = 10 ;

let added = a +b;
let subtracted = a- b ;

let multiply = a* b;

let div;

if (b !== 0){
    div = a/b;
}

console.log(`added:${added} sub: ${subtracted} mul: ${multiply} divided: ${div} `);

let isCorrect = true;

console.log(isCorrect ? 'yes' : 'no');

//conditionals

let marks = 55;

if(marks < 50){
    console.log("Fail");
}
else if(marks < 90){
    console.log("Pass");
    
}
else{
    console.log("You Got A  grade");
    
}

let isLoggedin = true;

let google = isLoggedin;
let facebook = isLoggedin;

let instagram = !isLoggedin;

if(google || facebook || instagram){
    console.log("login okay");
    
}

let user = 'student';

switch(user){
    case "admin":
        console.log("Admin Access");
        break;
    case "Teacher":
        console.log("Techer Access");
        break;
    case "Student":
        console.log("Student Access");
        break;
    default:
        console.log("view only access");
        break;
}

let fruits = ["banana","apple","grapes"];

let animals = new Array("cow","lion","cat");

animals.pop()
console.log(animals);

for (let a in fruits){
    console.log(fruits[a]);
}

console.log(fruits.shift());
console.log(fruits);

console.log(fruits.unshift("pineapple"));
console.log(fruits);

console.log(fruits.indexOf()); //index at which to begin the search

console.log(Array.from("lol")); //converts array from an string

function isodd(value){
    return (value % 2 !== 0) ? "Odd" : "even";
}

console.log(isodd(5));

let testArray = [5,25,95,455].every((element) => element%5 === 0); // here itDetermines whether all the members of an array satisfy the specified test

console.log(testArray);

let numArray = [1,2,3,4,5,6,7,8,9];

let oddArray = numArray.filter((element) => element % 2 !==0);
console.log(oddArray);
console.log(numArray.fill("lol",7));

numArray.splice(7,8,"yes","yes");

console.log(numArray);

// for loop
fruits.forEach((e) => console.log(e));

for(let i = 0; i< 10; i++){
    console.log(i);
}

let j = 0;

while(j < 10){
    console.log(`${j} bruh `);
    j++;
}

let k = 0;

do{
    console.log(`${k} okay `);
    k++;
}while( k < 5);

//objects
let pc = {
    CPU:"AMD Ryzen 7 9800 X3D",
    GPU : "RTX 5080 ",
    RAM : "32 GB DDR5",
    SSD:"Crucial P3 Plus 1 TB",
}

console.log(pc.CPU);

console.table(pc);

//this keyword
function Bankai(){
    let name = "minasuki";
    // console.log(this);
    console.log(this.name);
}

Bankai();

let anotherObject = {
    testfunc : function (){
        console.log("This is an method object");
    }
}

console.log(anotherObject.testfunc); // function code

console.log(anotherObject.testfunc()); // executes function code