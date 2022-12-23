import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Firstpage() {
  const [allBooksFirstPage, setAllBooksFirstPage] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch('/api/firstpage')
      .then((response) => response.json())
      .then((data) => setAllBooksFirstPage(data));
  }, []);
  // сюда приходят все книги с базы данныхс ручки в apirouter /registration
  // то что лежит в переменной allBooksFirstPage
  // нужно накатить сиды и вытащить их

  return (
    <>
      <h1 style={{ marginTop: '30px',marginBottom: '30px' }} >Список книг</h1>
      {allBooksFirstPage.map((el) => (
        <div className="card" style={{ marginLeft: '400px', width: '30rem', marginBottom: '30px' }} key={el.id}>
          <img src={el.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}
