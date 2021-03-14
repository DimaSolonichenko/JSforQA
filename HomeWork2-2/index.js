// Task 1

let a = 1;
let b = 1;

let c = ++a; // Увеличиваем значение а и записываем в с
let d = b++; // Записываем текущее значение b в d, при следующем вызове b увеличиваем его значение на 1

console.log(a); // a = 2
console.log(b); // b = 2
console.log(c); // c = 2
console.log(d); // d = 1

//Task 2

let language = prompt("Enter the language").toLowerCase();

switch(language){
    case ("chinese"):
    case ("mandarin"):
        console.log("MOST number of native speakers!");
    break;
    case "spanish":
        console.log("2nd place in number of native speakers");
    break;
    case "english":
        console.log("3rd place");
    break;
    case "hindi":
        console.log("Number 4");
    break;
    case "arabic":
        console.log("5th most spoken language");
    break;
    default:
        console.log("Great language too :D");
        
}
