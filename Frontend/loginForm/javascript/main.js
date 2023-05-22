let wrapper = document.querySelector('.wrapper');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let logiBtn = document.querySelector('.btnLogin-popup');
let closeIcon = document.querySelector('.icon-close');
//let slideShow = document.querySelector('.slide-show');



registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})


logiBtn.addEventListener('click', () => {
    wrapper.classList.add('reactive');
})

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('reactive');
    wrapper.classList.remove('active');
})


