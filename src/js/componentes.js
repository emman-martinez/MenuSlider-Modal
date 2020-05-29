import {
    checkEmail,
    checkRequired,
    checkLength,
    checkPasswordMatch
} from './helper';
import './../css/componentes.css';

const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const eventos = () => {

    toggle.addEventListener('click', () => { // Toggle nav
        document.body.classList.toggle('show-nav');
    });
    open.addEventListener('click', () => { // Show modal
        modal.classList.add('show-modal');
    });
    close.addEventListener('click', () => { // Hide modal 
        modal.classList.remove('show-modal');
    });
    window.addEventListener('click', (e) => { // Hide modal on outside click
        e.target == modal ? modal.classList.remove('show-modal') : false;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        checkRequired([name, email, password, password2]);
        checkLength(name, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordMatch(password, password2);
    });

};

const init = () => {
    console.log('Menú Slider & Modal');
    eventos();
};

export {
    init
}