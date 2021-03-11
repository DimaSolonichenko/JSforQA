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
switch(score){
    case (score < 60 && score >= 0):
         resultScore = "Your mark is F";
    break;
    case (score < 70):
        resultScore = "Your mark is D";
        break;
    case (score < 80):
        resultScore = "Your mark is C";
        break;
    case (score < 90):
        resultScore = "Your mark is B";
        break;    
    case (score <= 100):
        resultScore = "Your mark is A";    //Тут я сделал "<=", потому что 100 тоже можно получить 
        break;
    default:
        resultScore = "Lier!!! It's incorrect value"
}
alert(resultScore);
