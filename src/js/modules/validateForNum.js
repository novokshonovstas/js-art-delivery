export const validateForNum = (selector) => {
let inputNum = document.querySelectorAll(selector);

inputNum.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
    });
    }); 

};

