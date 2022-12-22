import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const [allbooksMainPage, setAllbooksMainPage] = useState([]);
  console.log(allbooksMainPage, '_+_+_+_+_+_+__');

  const Navigate = useNavigate();

  useEffect(() => {
    fetch('/api/mainpage')
      .then((response) => response.json())
      .then((data) => setAllbooksMainPage(data));
  }, []);
  // сюда приходят все книги с базы данныхс ручки в apirouter /mainpage
  // то что лежит в переменной allbooksMainPage
  // нужно накатить сиды и вытащить их

  return (
    <>
      <h1>hello</h1>
      <h3>
        сюда подать компонент из бута, карточку для отрисовки всех фильмов
        и компонент с рейтигом книги, и в низу добавить кнопку Добавать книгу
      </h3>

      {allbooksMainPage.map((el) => (
        <div className="card" style={{ marginLeft: '210px', width: '18rem', marginBottom: '30px' }} key={el.id}>
          <img src={el.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.title}</p>
            <a className="btn btn-primary" onClick={() => Navigate(`/book/${el.id}`)}>перейти к книге</a>
          </div>
        </div>
      ))}
    </>
  );
}
