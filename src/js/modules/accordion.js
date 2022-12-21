const accordion = (triggersSelector, contentsSelector) => {
const btns = document.querySelectorAll(triggersSelector);
const contents = document.querySelectorAll(contentsSelector);



// добавляем всем блокам контента анимацию
 contents.forEach(contentBlock => {
    contentBlock.classList.add('animated', 'fadeInDown');
    }); 

// перебираем все кнопки - на каждую событие клика 
// если на кликнутой кнопке нет класса активности - то перебираем еще раз и удаляем его у всех
// добавляем его кликнутой кнопке
  btns.forEach(btn => {
     btn.addEventListener('click', function () {
        if(!this.classList.contains('active')) {
            btns.forEach(btn => {
               btn.classList.remove('active', 'active-style');
               }); 
               this.classList.add('active', 'active-style');
        }
       });
 }); 


};

export default accordion;