import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const [allbooksMainPage, setAllbooksMainPage] = useState([]);

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

    <div className="container text-center">
      <div className="row">
        <div className="col">
          {
            allbooksMainPage.map((el) => (
              <div className="card" style={{ marginLeft: '250px', width: '30rem', marginBottom: '30px' }} key={el.id}>
                <img src={el.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.title}</p>
                  <a className="btn btn-primary" onClick={() => Navigate(`/book/${el.id}`)}>перейти к книге</a>
                </div>
              </div>
            ))
          }
        </div>
        <div className="col">
          <a className="btn btn-primary" style={{ position: 'fixed', marginTop: '270px' }} href="/newbook" role="button">Add book</a>
        </div>
      </div>
    </div>
  );
}
