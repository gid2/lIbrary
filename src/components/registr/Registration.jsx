import React from 'react';

export default function Registration() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location.href = '/mainpage';
    } else if (
      response.status === 404
    ) {
      alert('error');
    }
  };
  return (
    <>
    <h2 style={{ marginTop: '30px', marginBottom: '30px'  }}>
      регистрация нового пользователя
    </h2>
    <div style={{ width: '50%',  marginLeft: '320px'}} >
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input name="login" style={{ marginTop: '30px', marginBottom: '20px' }} placeholder="login" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input name="email" placeholder="Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input name="password" placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" style={{ marginTop: '30px', marginBottom: '30px' }} className="btn btn-success">зарегистрироваться</button>
    </form>
    </div>
    </>
  );
}
