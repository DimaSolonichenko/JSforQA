// Task 1

let a = prompt("Insert a = ");
let b = prompt("Insert b = ");

let result = (a + b < 10)? "few": "many";

alert(`You have ${result} money`);


//Task 2

let age = prompt("Enter your ages, please ");
let result;
if (age >= 10 && age <= 90)
    result = "You passed age control";
else
    result = "You don't pass age control";
alert(result)

//Task 3

const currentYear = new Date().getFullYear();

let Name = prompt("What's your name?");
alert("Hello, " + Name + "\nNice to meet you!");

let year = prompt("Enter your  birthday year, please");
let result = currentYear - year;

alert(`You are ${result} years old\nIf you already had Birthday in ${currentYear}))`);

//Task 4

let score = Number(prompt("Please, input your score"));
let resultScore;
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

//Task 4 (switch/case)

let score = Number(prompt("Please, input your score"));
let resultScore;
switch(true){
    case (score >=0 && score < 60):
        console.log("Your mark is F");
    break;
    case (score >=60 && score < 70):
        console.log("Your mark is D");
    break;
    case (score >=70 && score < 80):
        console.log("Your mark is C");
    break;
    case (score >=80 && score < 90):
        console.log("Your mark is B");
    break;
    case (score >=90 && score <= 100):
        console.log("Your mark is A");
    break;
    default: 
        console.log("Lier!!! It's incorrect value");
}