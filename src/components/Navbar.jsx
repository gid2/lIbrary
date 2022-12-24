import React from 'react';

export default function Navbar({ userId }) {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#f9ac67' }}>
        {userId
          ? (
            <>
              <img src="/icons/icona.png" alt="КНИЖНЫЙ ЧЕРВЬ" style={{ width: '120px', height: '90px', marginLeft: '30px' }} />
              <a className="navbar-brand" href="/mainpage"><div style={{ fontSize: '38px', fontFamily: 'Brush Script MT', marginTop: '10px' }}>HOME</div></a>
              <a className="navbar-brand" href="/newbook"><div style={{ fontSize: '38px', fontFamily: 'Brush Script MT', marginTop: '10px' }}>ADD BOOK </div></a>
              <a className="navbar-brand" href="/favourite"><div style={{ fontSize: '38px', fontFamily: 'Brush Script MT', marginTop: '10px' }}>ACCOUNT</div></a>
              <a className="nav-link" href="/auth/logout">
                <div style={{
                  fontSize: '38px', fontFamily: 'Brush Script MT', marginRight: '30px', marginTop: '10px',
                }}
                >
                  EXIT
                </div>
              </a>
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

// comments for push
