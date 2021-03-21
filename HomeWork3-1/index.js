// Task 1
const post = {
    "title body": "title body",
    author: "author",
    views: 0,
    isLive: false,
    someFunction: () => {
        console.log("Some value");
    },
    comment: {
        firstName: "firstName",
        lastName: "lastName",
        commentBody: "commentBody"
    }
};

post.someFunction();
console.log(post["comment"]);

//Task 2
function helloColleagues(company, team){
    return `I am working in ${company} in amazing ${team}`;
}

//Task 2.1
let schedule = {};

let isEmpty = (obj) => {
    return !Object.keys(obj).length;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule))


//Task 2.2

/* 
    Хочу, чтоб функция возвращала мне только "number" (Моя личная хотелка)
    Если использовать условие (a && b && typeof a === 'number' && typeof b === ''number' ), то я не смогу передать в функцию string, который можно преобразовать в number
    Например, maxNumber('3', 2)
*/
let maxNumber = (a, b) => {
    if(a === null || b === null || isNaN(Number(a)) || isNaN(Number(b))){  
        console.log("Given data was invalid");
        return NaN;
    }
    return Number(a) > Number(b) ? Number(a) : Number(b); // Добавил возврат числа, даже, если на входе был string
}
console.log(maxNumber('5'/'2', 2)); // 2.5
console.log(maxNumber(null, 2)); // NaN
console.log(maxNumber(undefined, 2)); // NaN
console.log(maxNumber('a'/2, 2)); // NaN
console.log(maxNumber(undefined, 2)) // NaN
console.log(maxNumber(0, '-2')) // 0

//Task 3

let salaries = { Mykola: 500, Pavlo: 500, Petro: 250 }

let allSalaries = (obj) => {    
    let result = 0;

    for (key in obj){
        result += Number(obj[key]);
    }
    return result;
}
console.log(allSalaries(salaries));

//Task 3.1

let biggestSalary = (obj) => {
    let max = 0;
    let result = {};
    let highestPaidEmployee;   
    
    for (key in obj){
        max = maxNumber(obj[key], max); // use function from task 2.2
    } 
    
    highestPaidEmployee = Object.keys(obj).filter(key => obj[key] === max);  // Записываем в массив все ключи с макс значением
    for (let i = 0; i < highestPaidEmployee.length; i++){
         result[highestPaidEmployee[i]] = max;
    }
    
    return result;
}

console.log(biggestSalary(salaries));

// Task 4

let menu = { width: 200, height: 300, title: "My menu" };

let multiplyNumeric = (obj) => {
    for (key in obj){
        if (typeof(obj[key]) == "number") obj[key] = obj[key] * 2;
    }
}
multiplyNumeric(menu);
console.log(menu);

//Task 5

function showStars(rows){ 
    let result = '';
    let star = "*"; 
    for (let row = 1; row <= rows; row++ )
    {        
        for(let i = 0; i < row; i++)
            result +=star; 
        result += ' ';
    }
    console.log(result);
}

showStars(5);