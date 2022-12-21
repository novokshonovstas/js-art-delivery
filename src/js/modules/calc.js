const calc = (state) => {
  const calcPrice = (size, material, additional, promo, result,) => {
    const picSize = document.querySelector(size);
    const picMaterial = document.querySelector(material);
    const additionalServ = document.querySelector(additional);
    const promoCod = document.querySelector(promo);
    const resultPrice = document.querySelector(result);

    let sum = 0;
  
    function calcOrder() {
      sum = Math.round((+picSize.value) * (+picMaterial.value) + (+additionalServ.value));
      

      if(picSize.value === '' || picMaterial.value === '') {
        resultPrice.textContent = 'Пожалуйста, выберите материал и размер картины!';
      } else if (promoCod.value === 'IWANTPOPART') {
       resultPrice.textContent = Math.round(sum * 0.7);
      } else {
        resultPrice.textContent = sum;
      }

      //записываем в стейт цену по результатам расчета
      const totalPrice = state.price = resultPrice.textContent;

        return totalPrice;
    }
    
    picSize.addEventListener('change', calcOrder);
    picMaterial.addEventListener('change', calcOrder);
    additionalServ.addEventListener('change', calcOrder);
    promoCod.addEventListener('input', calcOrder);
  };
  
  calcPrice('#size', '#material', '#options', '.promocode', '.calc-price',);
    
};

export default calc;