const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const body = document.body;

let isRegisterActive = false;

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    body.classList.remove('popup-active');
    isRegisterActive = true;
    updateTitreh1Visibility();
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    body.classList.add('popup-active');
    isRegisterActive = false;
    updateTitreh1Visibility();
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    body.classList.add('popup-active');
    updateTitreh1Visibility();
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    body.classList.remove('popup-active');
    updateTitreh1Visibility();
});

function updateTitreh1Visibility() {
    const titreh1 = document.querySelector('.titreh1');
    if (isRegisterActive || wrapper.classList.contains('active-popup')) {
        titreh1.style.opacity = '0';
        titreh1.style.pointerEvents = 'none';
    } else {
        titreh1.style.opacity = '1';
        titreh1.style.pointerEvents = 'auto';
    }
}

updateTitreh1Visibility();
