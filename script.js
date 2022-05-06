const mainMenu = document.querySelector('.header__list');
const mainHamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.header__link');
const writeMe = document.querySelector('.contact__button');
const modalWindow = document.querySelector('.modal');
const contactSubmit = document.querySelector('.btn__submit');
const userName = document.getElementById('userName');
const modalInputs = document.querySelectorAll('.user__field')

/* преобразование гампургер меню */
mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('header__list--active');
    mainHamburger.classList.toggle('hamburger--active');
});

/* плавный скролл и закрытие меню по клику на ссылку */
for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElem = menuLink.getAttribute('href');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates - 100,
            behavior: 'smooth'
        });
        mainMenu.classList.remove('header__list--active');
        mainHamburger.classList.remove('hamburger--active');
    })
};

/* открытие модального окна, закрытие по клику на бэкграунд и крестик */
writeMe.addEventListener('click', () => {
    modalWindow.classList.toggle('modal--active');
    userName.focus();

})

modalWindow.addEventListener('click', (event) => {
    if (
        event.target.matches('.btn__close') || 
        !event.target.closest('.modal__wrap')
    ) {
        modalWindow.classList.remove('modal--active');
        for (modalInput of modalInputs) {
            modalInput.value = '';
          };
    }
});

