useStrict();
function useStrict() {
    "use strict";
}

let numberOfFilms = null;

//start();
const personalMovieDB = {
    count:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};
//rememberMyFilms();
writeYourGenres();
showMyDB();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    } while(numberOfFilms <= 0 || numberOfFilms == null );
    
    if(numberOfFilms < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }
}
function rememberMyFilms() {
    for (let i = 0; i < 2; ++i) {
        let movie = null, rate = null;
        movie = askInput("Один из последних просмотренных фильмов?");
        rate = askInput("На сколько оцените его?");
        personalMovieDB.movies[movie] = rate;
     }
}
function askInput(message) {
    let result = null;
    do {
        result = prompt(message, "");
    }while(result == null || result == "" || result.length > 50);

    return result.trim();
}
function writeYourGenres () {
    for (let i = 0; i < 3; ++i) {
        let genre = askInput(`Ваш любимий жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }
}
