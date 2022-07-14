useStrict();
function useStrict() {
    "use strict";
}

let numberOfFilms = null;
askWatchMovies();

const personalMovieDB = {
    count:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};

for (let i = 0; i < 2; ++i) {
   let movie = null, rate = null;
   movie = askInput("Один из последних просмотренных фильмов?");
   rate = askInput("На сколько оцените его?");
   personalMovieDB.movies[movie] = rate;
}

console.log(personalMovieDB);

function askInput(message) {
    let result = null;
    do {
        result = prompt(message, "");
    }while(result == null || result == "" || result.length > 50);

    return result;
}

function askWatchMovies() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    } while(numberOfFilms <= 0 );
    
    if(numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}



