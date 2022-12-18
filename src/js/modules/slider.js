const slider = (slides, dir, prev, next) => {       
let slideIndex = 1;
let paused = false;

const slideItems = document.querySelectorAll(slides);


function showSlides(n) {
    // блок регулирует показ слайдов чтоб не выходил за пограничные значения
    if(n > slideItems.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideItems.length;

    }

    // скрываем все слайды
    slideItems.forEach(item => {
        item.classList.add('animated');
        item.style.display = 'none';
        }); 

        // показываем первый слайд, слайд индекс у нас 1, а в массиве он 0, поэтому slideIndex - 1 = 0;
        slideItems[slideIndex - 1].style.display = 'block';
}

// Вызваем функцию показа слайдов, она скроет все слайды и запустить первый слайд
showSlides(slideIndex);

// функция переключения слайда, при вызове мы будем передавать аргумент n в котором будет либо 1, либо -1
// и внутри будет запускаться функ showSlides
function plusSlide(n)    {
  showSlides(slideIndex = slideIndex + n);
}


/* один из слайдов без стрелок переключения и блок try позволяет проверить если они не были переданны при вызове
 то скрипт не сломается */
try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    // при клике на кнопку назад в запускается функция plusSlide(-1),  слайд переходит назад
    prevBtn.addEventListener('click', () => {
        plusSlide(-1);
        slideItems[slideIndex - 1].classList.remove('slideInLeft');
        slideItems[slideIndex - 1].classList.add('slideInRight');
    });
        // при клике на кнопку назад в запускается функция plusSlide(1), слайд переходит вперед 
    nextBtn.addEventListener('click', () => {
        plusSlide(1);
        slideItems[slideIndex - 1].classList.remove('slideInRight');
        slideItems[slideIndex - 1].classList.add('slideInLeft');
    });
} catch (e) {}


//функция активации анимации, к setInterval добавляем id в виде переменной paused
// проверяем условие если аргумент dir имеет значение вертикальное, класс переключения верткальный
function activateAnimation() {
    if(dir === 'vertical') {
        paused = setInterval(() => {
             plusSlide(1);
             slideItems[slideIndex - 1].classList.add('slideInDown');
         }, 3000);
     } else {
        paused = setInterval(() => {
             plusSlide(1);
             slideItems[slideIndex - 1].classList.remove('slideInRight');
             slideItems[slideIndex - 1].classList.add('slideInLeft');
         }, 3000);
     }
}

// запуск функции инициализации работы слайдов
activateAnimation();

// два обработчика событий на обоих слайдерах, при наведении мышки остановить работу слайдер, при уводе мышки запустить animateActivation();
    slideItems[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slideItems[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default slider;


