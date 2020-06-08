import '../scss/main.scss';

/* place your code below */

const name = 'Mariusz';
const age = 18;
const hook = 22;

console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
console.log(`Hak ma ledwie ${hook} lata ;)`);


const js_code = document.querySelector('.article-section__title--js');
console.log(js_code);

if (js_code != null)
js_code.innerHTML = 'here you are... <div class= "JS_box"> JS is here </div>';

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
