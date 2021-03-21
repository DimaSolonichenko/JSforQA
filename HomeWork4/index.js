// Task 1

const number = [1, 2, -5, 3];

let sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(sum(number));

// Task 2

const arrayFromRange = (min, max) => {
    let arr = [];
    min = Number(min);
    max = Number(max);
    while (min <= max){
        arr.push(min);
        min++;
    }
    return arr;
}

console.log(arrayFromRange('-10', 2));

// Task 3

const numbers = [1, 2, 3, 4, 5];
const getMax = (numbers) => {
    let max = Number(numbers[0]);
    for(let i = 1; i < numbers.length; i++){
        max = (numbers[i] >= max) ? Number(numbers[i]) : max;
    }
    return max;
}

console.log(getMax(numbers));

// Task 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
    ];
    
    const bestMovies = (movies, year = 2019, rating = 4) => {
        result = [];
        for (let i = 0; i < movies.length; i++){
            if (movies[i]["year"] == year && movies[i]["rating"] > rating)
                result.push(movies[i]);
        }
        //console.log(result)
        return result;
    }
    console.log(bestMovies(movies));
    
    
    // asc - по убыванию, default - по возрастанию
    const sortByRating = (movies, sorting = '') => {
        return bestMovies(movies).sort((a, b) => {       
            return (sorting == 'asc') ?  a.rating - b.rating : b.rating - a.rating;      
        }); 
    }
    movies = sortByRating(movies);
    console.log(movies);
    
    const getTitles = (movies) => {
        let result = [];
        for (let i = 0; i < movies.length; i++){
            result.push(movies[i].title);
        }
        return result;
    }
    
    console.log(getTitles(movies, 'asc'));