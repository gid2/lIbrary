import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Firstpage() {
    const [allbooks, setAllbooks] = useState([])

    const response = fetch('/.....')
        .then((response) => response.json())
        .then((data) => setAllbooks(data))

    //что придет с базы данных ? 
    return (
        <>
            <h1>hello</h1>
            {/* {
                allbooks.map((el) =>  <div className={el.name} style="width: 18rem;" />
                       <img src="..." className="card-img-top" alt="..." />
            <div className="card-body" />
            <h5 className="card-title">name film </h5>
            <p className="card-text">{el.title}</p>
            <a href="/...." className="btn btn-primary">go about book</a>
            
            // лайки
                )
            } */}
        </>
    )
}
