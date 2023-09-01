const mainNav = document.querySelector('.main-nav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', (e) => {
    const target = e.target;
    mainNav.classList.toggle('main-nav--open');
    target.classList.toggle('burger--active');

    if (mainNav.classList.contains('main-nav--open')) {
        document.body.setAttribute('style', 'overflow: hidden');
    } else document.body.removeAttribute('style');
});