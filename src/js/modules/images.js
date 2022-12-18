const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.portfolio-wrapper');
    const bigImg = document.createElement('img');
    

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if(target && target.classList.contains('preview')) {
            const path =  target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '575px';
            bigImg.style.height = '575px';
            imgPopup.style.display = 'flex';
            
            document.body.style.overflow = 'hidden';
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            
        }
    });

};

export default images;