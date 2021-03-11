// Task 1

let a = prompt("Insert a = ");
let b = prompt("Insert b = ");

let result = (a + b < 10)? "few": "many";

alert("You have " + result + " money");


//Task 2

let age = prompt("Enter your ages, please ");
let result;
if (age >= 10 && age <= 90)
    result = "You passed age control";
else
    result = "You don't pass age control";
alert(result)

//Task 3

const currentYear = 2021;

let Name = prompt("What's your name?");
alert("Hello, " + Name + "\nNice to meet you!");

let year = prompt("Enter your  birthday year, please");
let result = currentYear - year;

alert("You are " + result + " years old" + "\nIf you already had Birthday in " + currentYear + "))");

//Task 4

let score = Number(prompt("Please, input your score"));
let resultScore;
console.log(score < 60)
if (score >=0 && score < 60)
    resultScore = "Your mark is F";
    else if (score < 70)
        resultScore = "Your mark is D";
    else if (score < 80)
        resultScore = "Your mark is C";
    else if (score < 90)
        resultScore = "Your mark is B";
    else if (score <= 100)
        resultScore = "Your mark is A"; // Тут пославил "<= 100", потому что 100 тоже подходит (в контексте оценок)
    else
        resultScore = "Lier!!! It's incorrect value";

alert(resultScore);