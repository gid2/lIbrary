import React, { useState } from 'react';

export default function Newbook() {
  const [newbook, setNewbook] = useState([]);

  const AddBooker = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/newbook', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charSet=utf-8',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/mainpage'; // --->проверить адрес
    } else {
      window.location = '/newbook';
    }
  };

  return (
    <>
      <form onSubmit={AddBooker}>
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>Add new book</div>
        <div className="input-group mb-3">
          <input type="text" name='name' className="form-control" placeholder="название" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="text" name='title' className="form-control" placeholder="автор" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="text" name='author' className="form-control" placeholder="комментарий" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="text" name='img' className="form-control" placeholder="ссылка с фото для обложки" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>

        <button  type="submit" className="btn btn-success">Add book</button>
      </form>
    </>
  );
}
