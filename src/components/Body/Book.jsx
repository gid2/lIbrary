import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
  const [book, setBook] = useState({});
  const [logins, setLogins] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/book/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  useEffect(() => {
    fetch(`/api/login/${id}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => setLogins(data));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/comment/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location.href = `/book/${id}`;
    } else if (
      response.status === 404
    ) {
      alert('error');
    }
  };

  const favouriteAdder = () => {
    fetch(`/api/book/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
    if (response.ok) {
      window.location.href = '/favourite';
    } else if (
      alert('книга не добавлена')) {
      return (
        <>
          <div className="mb-3">
            <img src={book.img} className="img-fluid" alt="" />
            <label htmlFor="exampleInputEmail1" className="form-label" />
          </div>
          <div>
            {' '}
            Название:
            <span>
              {book.name}
            </span>
          </div>
          <div>
            {' '}
            Author:
            <span>
              {book.author}
            </span>
          </div>
          <div>
            <span>
              {book.title}
            </span>
          </div>
          <form onSubmit={submitHandler}>
            {' '}
            <input name="comment" style={{ marginTop: '30px', marginBottom: '30px' }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="submit" className="input-group-text">добавить</button>
            {' '}
            {logins?.map((el) => (
              <div>
                <h3>
                  {el?.User?.login}
                  :
                  {el?.comment}
                </h3>
              </div>
            ))}
          </form>
        </>
      );
    }
  };
}
