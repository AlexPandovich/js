'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector(".wrapper");


//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 600px';

buttons[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = "red";

// for(let i = 0;i < hearts.length; ++i) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');
 div.classList.add('black');
// document.body.append(div);

// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.before(div);
// wrapper.after(div);

// circles[0].replaceWith(div);
// circles[0].remove();

// wrapper.appendChild(div);
div.innerHTML = "<h1>Hello box</h1>";

document.body.replaceChild(div, circles[0]);
div.insertAdjacentHTML("beforeend", "<h2>Hello lil</h2>");
//document.body.insertBefore(div, circles[1]);
//div.textContent = "hello";