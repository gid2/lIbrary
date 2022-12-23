import React from 'react';

export default function Auth() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/mainpage';
    } else {
      window.location = '/auth/reg';
      alert('Не правильный логин или пароль');
    }
  };
  return (
    <>
      <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>
        Авторизация пользователя
      </h2>
      <div style={{ width: '50%', marginLeft: '320px' }}>
        {' '}
        <form onSubmit={submitHandler} >
          <div className="mb-3">
            <label style={{ marginTop: '30px', marginBottom: '30px' }} htmlFor="exampleInputEmail1" className="form-label" />
            <input name="email" type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" />
            <input name="password" type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button style={{ marginTop: '30px', marginBottom: '30px' }} type="submit" className="btn btn-success">авторизоваться</button>
        </form>
      </div>
    </>
  );
}