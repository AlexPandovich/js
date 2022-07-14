useStrict();
function useStrict() {
    "use strict";
}

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
let numberOfFilms;

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

const personalMovieDB = {
    count:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};

for (let i = 0; i < 2; ++i) {
    let a = null, b = null;

    do {
        a = prompt("Один из последних просмотренных фильмов?", "");
    }while(a == null || a == "" || a.length > 50);

    do {
        b = prompt("На сколько оцените его?", "");
    }while(b == null || b == "" || b.length > 50);
    
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);





