/* Открытие\закрытие гамбургер меню */
const mainMenu = document.querySelector('.header__list');
const mainHamburger = document.querySelector('.hamburger');

let isOpenMenu = false;

function showMenu() {
    if(!isOpenMenu &&
        mainMenu &&
        mainHamburger
    ) {
        mainMenu.classList.add('header__list--active');
        mainHamburger.classList.add('hamburger--active');
        isOpenMenu = true;
    } else if (
        isOpenMenu &&
        mainMenu &&
        mainHamburger
    ) {
        mainMenu.classList.remove('header__list--active');
        mainHamburger.classList.remove('hamburger--active');
        isOpenMenu = false;
    }
}

mainHamburger.onclick = showMenu;

/* По клику на ссылку плавный скролл и закрытие меню  */
const menuLinks = document.querySelectorAll('.header__link');

function smoothScrollToLink(event, link, px) {
    if(link) {
        event.preventDefault();
        let scrollToElem = link.getAttribute('href');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates - px,
            behavior: 'smooth'
        });
    }
};

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        smoothScrollToLink(event, link, 100);
        showMenu();
    })
})

/* открытие модального окна, закрытие по клику на бэкграунд и крестик */
const writeMe = document.querySelector('.contact__button');
const modalWindow = document.querySelector('.modal');
const userName = document.getElementById('userName');
const modalInputs = document.querySelectorAll('.user__field');

let isOpenModal = false;

function showModal(modal, input) {
    if(
        !isOpenModal && 
        modal &&
        input
    ) {
        modal.classList.add('modal--active');
        input.focus();
        isOpenModal = true;
    }
};

function clearInputs(inputs) {
    if(inputs) {
        inputs.forEach(element => {
            element.value = '';
        });
    }
};

function closeModal(event, modal, classCloseButton, classModalForm) {
    if (
        isOpenModal &&
        modal &&
        (event.target.matches(classCloseButton) || 
        !event.target.closest(classModalForm))
        ) {
            modal.classList.remove('modal--active');
            isOpenModal = false;
        }
};
    
writeMe.addEventListener('click', () => {
    showModal(modalWindow, userName);
});

modalWindow.addEventListener('click', (event) => {
    closeModal(event, modalWindow, '.btn__close', '.modal__wrap', );
    if(!isOpenModal) {
        clearInputs(modalInputs);
    }
});
