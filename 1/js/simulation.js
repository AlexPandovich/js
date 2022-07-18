useStrict();
function useStrict() {
    "use strict";
}

const personalMovieDB = {
    count: 0,
    movies : {},
    actors : {},
    genres : [],
    privat: false,

    askInput: function(message) {
        let result = null;
        do {
            result = prompt(message, "");
        }while(result == null || result == "" || result.length > 50);
    
        return result.trim();
    },
    showMyDB : function () {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    start : function() {
        let numberOfFilms = null;
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
        this.count = numberOfFilms;
    },
    rememberMyFilms : function() {
        for (let i = 0; i < 2; ++i) {
            let movie = null, rate = null;
            movie = this.askInput("Один из последних просмотренных фильмов?");
            rate = this.askInput("На сколько оцените его?");
            personalMovieDB.movies[movie] = rate;
         }
    }, 
    writeYourGenres:function () {
        for (let i = 0; i < 3; ++i) {
            let genre = this.askInput(`Ваш любимий жанр под номером ${i + 1}`);
            personalMovieDB.genres[i] = genre;
        }

        personalMovieDB.genres.forEach(function(curr, i) {
            console.log(`Любимый жанр #${i + 1} - это ${curr}`);
        });
    }, 
    toggleVisibleMyDB() {
        this.privat = !this.privat;
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
//personalMovieDB.showMyDB();




