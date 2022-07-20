/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
const comedy = document.querySelector(".promo__genre");
const promoContent = document.querySelector(".promo__bg");
const movieList = document.querySelector(".promo__interactive-list");

adv.forEach(item => {
    item.remove();
});


comedy.textContent = "Драма";
promoContent.style.backgroundImage = "url('img/bg.jpg')";
//movieList.innerHTML = "";
console.log(movieList.childNodes);

movieList.childNodes.forEach(val => {
    movieList.removeChild(val);
    //console.log(val);
});

// movieDB.movies.forEach((item, i) => {
//     movieList.innerHTML += 
//     `<li class="promo__interactive-item">${i}. ${item}
//         <div class="delete"></div>
//     </li>`;
// });


// movieDB.movies.forEach((item, i) => {
//     const li = document.createElement("li");
//     li.classList = "promo__interactive-item";
//     li.textContent = `${i} ${item}`;
    
//     const div = document.createElement('div');
//     div.classList = "delete";
//     li.append(div);

//     movieList.append(li);
// });





