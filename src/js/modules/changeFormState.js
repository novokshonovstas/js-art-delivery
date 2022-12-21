const changeModalState = (state) => {
    const picSize = document.querySelectorAll('#size');
    const picMaterial = document.querySelectorAll('#material');
    const additionalServ = document.querySelectorAll('#options');
    const promoCod = document.querySelectorAll('#promocode');


  

    const selectValue = {
        size: {
            '500': '40x50',
            '1000': '50x70',
            '1500': '70x70',
            '2000': '100x70',
        },
        material: {
            '1': 'Холст из волокна',
            '1.2': 'Льняной холст',
            '1.5': 'Холст из натурального хлопка'
        }, 
        options: {
            '500': 'Покрытие арт-гелем',
            '1000': 'Доставка готовых работ',
            '1500': 'Экспресс-изготовление'
            
        }
        
    };

    const { size, material, options } = selectValue;



    function bindDataToElem(elem, event, prop) {

      elem.forEach(item => {
         item.addEventListener(event, () => {
            let key = item.value;

            switch (item.getAttribute('id')) {
                case 'size':
                   state[prop] = size[key];
                    break;
                case 'material':
                    state[prop] = material[key];
                    break;
                case 'options':
                    state[prop] = options[key];
                    break;
                case 'promocode':
                    state[prop] = key;
                    break;
    
            }
            console.log(state);
         });
         }); 

    }
    

    
    
    
    bindDataToElem(picSize, 'change', 'size');
    bindDataToElem(picMaterial, 'change', 'material');
    bindDataToElem(additionalServ, 'change', 'options');
    bindDataToElem(promoCod, 'input', 'promocode');

};

export default changeModalState;