import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <>
      <div>
        Questions
        <ul>
          {book?.map((el) => <li>{el.question}</li>)}
        </ul>
      </div>

      <div className="mb-3">
        <img src="..." className="img-fluid" alt="" />
        <label htmlFor="exampleInputEmail1" className="form-label">
          <input name="name" style={{ marginTop: '30px', marginBottom: '30px' }} placeholder="" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
        <button type="submit">добавить</button>
      </div>
    </>
  );
}
