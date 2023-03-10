import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Mainpage() {
  const [allbooksMainPage, setAllbooksMainPage] = useState([]);
  const [likes, setLike] = useState('');
  console.log(allbooksMainPage, '_+_+_+_+_+_+__');

  const Navigate = useNavigate();
  const { id } = useParams();
  const submitHendler = async (e, supperId) => {
    e.preventDefault();
    const response = await fetch(`/api/like/${supperId}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      setLike(`${likes}yellow`);
    } else if (
      response.status === 404
    ) {
      alert('error');
    }
  };

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
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            {
            allbooksMainPage.map((el) => (
              <div
                className="cardcard text-bg-secondary mb-3"
                // style={{
                //   marginLeft: '200px', width: '30rem', marginBottom: '30px', borderRadius: '10px', marginTop: '10px',
                // }}
                style={{
                  margin: '0 auto', width: '40rem', borderRadius: '10px', marginTop: '10px',
                }}
                key={el.id}
              >
                <img src={el.img} className="card-img-top" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.title}</p>
                  <a className="btn btn-primary" style={{ marginBottom: ' 7px' }} onClick={() => Navigate(`/book/${el.id}`)}>перейти к книге</a>
                  <form onSubmit={(e) => submitHendler(e, el.id)}>
                    <button type="submit" text-al>
                      <i className="bi bi-heart-fill" />
                      <svg color={likes} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}
