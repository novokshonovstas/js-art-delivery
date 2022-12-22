const imgSize = (imgSelector) => {
// все блоки картинок на станице
const blocks = document.querySelectorAll(imgSelector);

//функция показа изоображения 
function showImg(block) {
    // получаем картнку заглушку внутри каждого блока
  const img  = block.querySelector('img');

  //меняем ей путь на картинку которая ее заменить из папки assets/img у нее префикс -1
  //н. картинка заглушка в html - img3.png, картинка при наведении будет img3-1.png
  // отрезаем с конца 4 символа = .png и добавляем -1.png
  img.src = img.src.slice(0, -4) + '-1.png';
  // внутри блоков находим все параграфы и скрываем их кроме одного - sizes-hit
  block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
    p.style.display = 'none';
  });
}

function hideImg(block) {
  const img  = block.querySelector('img');
// обратная функция показа заглушки после того как мы уведем мышку с блоков
// отрезаем 6 символов с конца -1.png и дрбавляем просто .png. то есть вернем картинку из заглушки
  img.src = img.src.slice(0, -6) + '.png';
  block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
    p.style.display = 'block';
  });
}


// перебераем все блоки, на каждый блок вешаем два обработчика при наведении мышки над блоком и уводе мышки.
// при наведении показываем вызываем функцию showImg, при уводе мышки - hideImg
 blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
        showImg(block);
    });
    block.addEventListener('mouseout', () => {
        hideImg(block);
    });
    }); 
};

export default imgSize;

