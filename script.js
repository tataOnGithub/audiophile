let burger = document.querySelector('.burger');
let navbar = document.querySelector('.section-of-products-navbar-wrapper');

let cart = document.querySelector('#cart');
let checkoutModal = document.querySelector('.modal-checkout-wrapper');

let moneyNumber = document.getElementById('e-money-number-wrapper');
let moneyPin = document.getElementById('e-money-pin-wrapper');
let bottomText = document.getElementById('checkout-bottom-text');



burger.addEventListener('click', () => {
    navbar.classList.toggle('display-navbar');
})

cart.addEventListener('click', () => {
    checkoutModal.classList.toggle('display-checkout-modal');
})


function eMoney() {
    moneyNumber.style.display = 'block';
    moneyPin.style.display = 'block';
    bottomText.style.display = 'none';
}

function cashOnDelivery() {
    moneyNumber.style.display = 'none';
    moneyPin.style.display = 'none';
    bottomText.style.display = 'block';
}