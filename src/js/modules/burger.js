const burger = (menuSelector, burgerSelector) => {

const burgerMenu = document.querySelector(menuSelector);
const burgerIcon = document.querySelector(burgerSelector);





// скрываем меню
burgerMenu.style.display = 'none';


// клик на бургер показывпет бургер меню

burgerIcon.addEventListener('click', () => {
    /* window.screen.availWidth - ширина экрана пользователя без размеров рамки, панель задач, полоса прокрутки и тд
    - то есть ТОЛЬКО КОНТЕНТ
    */
    if(burgerMenu.style.display === 'none' && window.screen.availWidth < 993) {
        burgerMenu.style.display = 'block';
  
    } else {
        burgerMenu.style.display = 'none';
      
    }

    // при изменении ширины экрана больше 992 px скрываем бургер меню
    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            burgerMenu.style.display = 'none';
        }
    });
});
};

export default burger;