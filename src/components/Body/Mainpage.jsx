import React, { useState } from 'react'

export default function Mainpage() {
    const [allbooksMainPage, setAllbooksMainPage] = useState([])

    const response = fetch('/api/firstpage')
        .then((response) => response.json())
        .then((data) => setAllbooksMainPage(data))
    // сюда приходят все книги с базы данныхс ручки в apirouter /mainpage
    // то что лежит в переменной allbooksMainPage
    // нужно накатить сиды и вытащить их 

    return (
        <>
            <h1>hello</h1>
            <h3>сюда подать компонент из бута, карточку для отрисовки всех фильмов
                и компонент с рейтигом книги, и в низу добавить кнопку Добавать книгу
            </h3>
        </>
    )
}
