import {postData} from '../services/requests';

const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    // putNumOnly('[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
        success: 'Спасибо! Мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };

  

    const clearInputs = () => {
        // инпут тайп текст
        inputs.forEach(input => {
            input.value = '';
        });
        // инпут тайп файл
        upload.forEach(input => {
            input.previousElementSibling.textContent = 'Файл не выбран';
        });
    };


    // инпут тайп файл
     upload.forEach(inputFile => {
        inputFile.addEventListener('input', () => {
        console.log(inputFile.files);

        let dots;

        const arr =  inputFile.files[0].name.split('.');

       arr[0].length > 6 ? dots = '...' : dots = '.';

        const name = arr[0].substring(0, 6) + dots + arr[1];

        inputFile.previousElementSibling.textContent = name;


        });
        }); 

     forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.append(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);
           
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.append(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.append(textMessage);


            const formData = new FormData(form);
            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);
           
            postData(api, formData)
                .then(res => {
                    console.log(res);
                   statusImg.setAttribute('src', message.ok);
                   textMessage.textContent = message.success;
                }).catch((e) => {
                    console.log(e.stack);
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                }).finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 4000);
                });
        });
        }); 
};

 
export default forms;