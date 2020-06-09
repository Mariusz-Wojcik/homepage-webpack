import '../scss/main.scss';

import moment from 'moment';

/* place your code below */

const name = 'Mariusz';
const age = 18;
const hook = 22;

console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
console.log(`Hak ma ledwie ${hook} lata ;)`);


const js_code = document.querySelector('.article-section__title--js');
console.log(js_code);


const now_time = moment().format('MMMM Do YYYY, h:mm:ss a');

if (js_code != null)
js_code.innerHTML = `here you are... <div class= "JS_box"> JS is here: ${now_time} </div>`;

function welcome(age, name, hook) {
    console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
    console.log(`Hak ma ledwie ${hook} lata ;)`);
};

welcome(age, name, hook);

const welcome_new = (age, name, hook)=>{
    console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
    console.log(`Hak ma ledwie ${hook} lata ;)`);  
};

welcome_new(age, name, hook);

const hamburgher = document.querySelector('.hamburger--js');
hamburgher.addEventListener('click', ()=>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

let isDark = false;

const dark = document.querySelector('.dark-mode--js');

dark.addEventListener('click', ()=>{
    if (isDark == false) {
    document.documentElement.style.setProperty('--background-color', '#000000');
    document.documentElement.style.setProperty('--font-color', '#ffffff');
    document.documentElement.style.setProperty('--about-background-color', '#555555');
    document.documentElement.style.setProperty('--about-font-color', '#ffffff');
    document.documentElement.style.setProperty('--article-background-color', '#333333');
    document.documentElement.style.setProperty('--link-font-color', 'orange');
    isDark = true;}
    else if (isDark == true) {
    document.documentElement.style.setProperty('--background-color', '#b9aeae');
    document.documentElement.style.setProperty('--font-color', '#000000');
    document.documentElement.style.setProperty('--about-background-color', '#ffffff');
    document.documentElement.style.setProperty('--about-font-color', '#000000');
    document.documentElement.style.setProperty('--article-background-color', '#b4bdc0');
    document.documentElement.style.setProperty('--link-font-color', 'blue');
    isDark = false;}
})
