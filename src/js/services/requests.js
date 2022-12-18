  //функция создания POST запроса на сервер с данными из формы
  const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
    });

    return await res.text();
};
//функция создания GET запроса на сервер 
  const getResource = async (url) => {
    const res = await fetch(url);

    return await res.json();
};


export {postData, getResource};