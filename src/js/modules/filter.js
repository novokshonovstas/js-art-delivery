const filter = () => {
// родительский блок кнопок сверху
const menu = document.querySelector('.portfolio-menu');
//все кнопки сверху li
const menuItems = menu.querySelectorAll('li');
// далее каждая отдельная кнопка которую получаем внутри родителя menu
const btnAll = menu.querySelector('.all');
const btnLovers = menu.querySelector('.lovers');
const btnChef = menu.querySelector('.chef');
const btnGirl = menu.querySelector('.girl');
const btnGuy = menu.querySelector('.guy');
const btnGrandmother = menu.querySelector('.grandmother');
const btnGranddad = menu.querySelector('.granddad');
// родительский блок картинок
const wrapper = document.querySelector('.portfolio-wrapper');
// все картинки класс .all
const markAll = wrapper.querySelectorAll('.all');
// далее псевдоселекторы каждой отдельной картинки для девушки, парня и тд
const markGirl = wrapper.querySelectorAll('.girl');
const markGuy = wrapper.querySelectorAll('.guy');
const markLovers = wrapper.querySelectorAll('.lovers');
const markChef = wrapper.querySelectorAll('.chef');
const no = document.querySelector('.portfolio-no');

    /* Принимает параметр марк тайп по которому будет фильтровать

1.cоздаем функцию -  перебираем все картинки markAll с классом .all и скрываем их
2. скрываем блок no - это блок в котором надпись что таких картинок мы еще не делали
3. дале проверяем условие if(markType) - если марк тайп передан, а это псевдомассив который соответствет всем картинкам данной категории
для девушки, парня и тд. Перебираем этот псевдомассив и назначаем ему стайл блок
4.  блок else показывает блок no
5. на каждую кнопку вещаем обработчик событий по клику и внутри вызваем функцию typeFilter и передаем конкретный марк тайп
6. создаем делегирование событий для пункта меню - родитель всех кнопок, убираем класс активности у всех и назначаем кликнутому элементу LI*/


const typeFilter = (markType) => {
     markAll.forEach(mark => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
        }); 

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
             markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
                }); 
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
};

// функция активации кнопки с кликом и фильтрации по классу - markType
const activateTypeFilter = (btn, markType) => {
    btn.addEventListener('click', () => {
            typeFilter(markType);
    });
};

activateTypeFilter(btnAll, markAll);
activateTypeFilter(btnLovers, markLovers);
activateTypeFilter(btnChef, markChef);
activateTypeFilter(btnGuy, markGuy);
activateTypeFilter(btnGirl, markGirl);
activateTypeFilter(btnGrandmother);
activateTypeFilter(btnGranddad);


menu.addEventListener("click", (e) => {
  let target = e.target;
  if (target && target.tagName === "LI") {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
  }
});

};
export default filter;

