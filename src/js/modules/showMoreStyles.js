import { getResource } from "../services/requests";

const showMoreStyles = (selector, cardWrapper) => {
const btnShow = document.querySelector(selector);
// const cards = document.querySelectorAll(styles);

//  cards.forEach(card => {
//     card.classList.add('animated', 'fadeInUp');
//     }); 

// btnShow.addEventListener('click', () => {
//     cards.forEach(card => {
//         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
//         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
//         }); 
    
//         btnShow.remove();

// });

btnShow.addEventListener('click', function() {
    getResource('http://localhost:3000/styles')
        .then(res => createCards(res));

        this.remove();
});


function createCards(response) {
   response.forEach(({src, title, link}) => {
    const card = document.createElement('div');
    card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  
    card.innerHTML = `
      <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
      </div>		
    `;
    
    document.querySelector(cardWrapper).appendChild(card);
      }); 

}



};

export default showMoreStyles;