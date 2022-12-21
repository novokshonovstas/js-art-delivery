import modals from "./modules/modals";
import images from "./modules/images";
import slider from "./modules/slider";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import changeFormState from "./modules/changeFormState";
import filter from "./modules/filter";
import imgSize from "./modules/imgSize";
import accordion from "./modules/accordion";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
   
    let orderState = {};
    
    modals();
    images();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms(orderState);
    showMoreStyles('.button-styles', '#styles .row');
    calc(orderState);
    changeFormState(orderState);
    filter();
    imgSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');


    

});