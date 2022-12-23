import React from 'react';

export default function Navbar({ userId }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        {userId
          ? (
            <>
              <a className="navbar-brand" href="/mainpage">Navbar</a>
              <a className="nav-link" href="/auth/logout">logout</a>
            </>
          )
          : (
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth/reg">регистрация</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth">авторизация</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
      </nav>

    </div>
  );
}
