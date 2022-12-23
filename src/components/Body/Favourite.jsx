import React, { useEffect, useState } from 'react';

export default function Favourite() {
  const [favouritebooks, setfavouritebooks] = useState([]);

  useEffect(() => {
    fetch('/api/favourite')
      .then((response) => response.json())
      .then((data) => setfavouritebooks(data));
  }, []);

  //тут нужно добавить второй юз эффект который при загрузки страницы 
  //будет отрисовывать все фильмы добавленные в избранное 
  // 

  return (

    <div className="container text-center">
      <div className="row">
        <div className="col">
          Мои книги
          {favouritebooks?.map((el) => (
            <div className="card" style={{ width: '18rem' }}>
              <img src={el.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">{el.title}</p>

              </div>
            </div>
          ))}
        </div>
        <div className="col">
          Избранное
        </div>
      </div>
    </div>
  );
}
