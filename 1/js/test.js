useStrict();
function useStrict() {
    "use strict";
}

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
console.log(numberOfFilms);
const personalMovieDB = {
    numberOfFilms:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};

const movieName1 = prompt("Один из последних просмотренных фильмов?", "");
const rate1 = prompt("На сколько оцените его?", "0");
const movieName2 = prompt("Один из последних просмотренных фильмов?", "");
const rate2 = prompt("На сколько оцените его?", "1");

personalMovieDB.movies = {
    movieName1: rate1,
    movieName2: rate2
};

console.log(personalMovieDB.movies);





