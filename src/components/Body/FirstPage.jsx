import React, { useState } from 'react';

export default function Firstpage() {
  const [allbooks, setAllbooks] = useState([]);

  const response = fetch('/api/registration')
    .then((response) => response.json())
    .then((data) => setAllbooks(data));
    // сюда приходят все книги с базы данныхс ручки в apirouter /registration
    // то что лежит в переменной allBooksFirstPage
    // нужно накатить сиды и вытащить их

  return (
    <>
      <h1>hello</h1>
      <h3>
        сюда подать компонент из бута, карточку для отрисовки всех фильмов и какой
        то компонент для рейтинга книги
      </h3>
    </>
  );
}
