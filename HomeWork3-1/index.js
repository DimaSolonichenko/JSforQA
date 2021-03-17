// Task 1
const post = {
    "title body": "title body",
    author: "author",
    views: 0,
    isLive: false,
    someFunction: function(){
        console.log("Some value");
    },
    comment: {
        firstName: "firstName",
        lastName: "lastName"
    }
};

post.someFunction();

//Task 2
function helloColleagues(company, team){
    return `I am working in ${company} in amazing ${team}`;
}

//Task 2.1
let schedule = {
    
};

function isEmpty(obj){
    let arr = Object.keys(obj);
    result = 0;
    for (i in arr){
        result++;
    }
    return Boolean(result);
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule))


//Task 2.2

function maxNumber(a, b){
    if(Number(a) == NaN || Number(b) == NaN)
        return NaN
    return Number(a) > Number(b) ? a : b; 
}
console.log(maxNumber('a', 2));

//Task 3

let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }

function allSalaries(obj){    
    let result = 0;
    for (i in obj){
        console.log(i);
        result += Number(obj[i]);
    }
    return result;
}
console.log(allSalaries(salaries));

//Task 3.1

function biggestSalary(obj){
    max = 0;
    for (i in obj){
        max = maxNumber(obj[i], max);
    }
    return max;
}

console.log(biggestSalary(salaries));

// Task 4

let menu = { width: 200, height: 300, title: "My menu" };

function multiplyNumeric(obj){
    for (i in obj){
        if (typeof(obj[i]) == "number") obj[i] = obj[i] * 2;
        console.log(obj[i])
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