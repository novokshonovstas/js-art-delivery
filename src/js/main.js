import modals from "./modules/modals";
import images from "./modules/images";
import slider from "./modules/slider";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
   
    
    modals();
    images();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    showMoreStyles('.button-styles', '#styles .row');


    

});