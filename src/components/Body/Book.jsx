import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
  const [book, setBook] = useState({});
  const [likes, setLike] = useState(false);
  console.log(book.Comments);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/book/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
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

  // const likeHandler = () => {
  //   useEffect(() => {
  //     fetch(`/api/like/${id}`, {
  //       method: 'POST',
  //     })
  //       .then((response) => response.json())
  //       .then((data) => (data.like === true ? setLike(`${likes}yellow`) : console.log('error')));
  //   }, []);
  // };

  // useEffect(() => {
  //   fetch(`/api/like/${id}`, {
  //     method: 'POST',
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (data.like === true ? setLike(`${likes}yellow`) : console.log('error')));
  // }, []);

  // const likeHandler = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(`/api/like/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
  //   });
  //   if (response.like === true) {
  //     setLike(`${like}yellow`);
  //   } else if (
  //     response.status === 404
  //   ) {
  //     alert('error');
  //   }
  // };

  useEffect(() => {
    fetch(`/api/like/${id}`, {
      method: 'POST',
    });
  }, [likes]);

  const likeHandler = () => {
    setLike((prev) => !prev);
  };

  return (
    <>
      <div className="mb-3">
        <img src={book.img} className="img-fluid" alt="" />
        {/* <label htmlFor="exampleInputEmail1" className="form-label" /> */}
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
      <form>
        <button className="input-group-text" type="button" onClick={likeHandler}>
          {' '}
          <i className="bi bi-heart-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" color={!likes ? 'black' : 'red'}>
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          </i>
        </button>
      </form>
      <form onSubmit={submitHandler}>
        {' '}
        <input name="comment" style={{ marginTop: '30px', marginBottom: '30px' }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <button type="submit" className="input-group-text">добавить</button>
        <ul>
          {book?.Comments?.map((el) => <li>{el.comment}</li>)}
        </ul>
      </form>
    </>
  );
}
