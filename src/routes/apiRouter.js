import { Router } from 'express';
import { Book } from '../db/models';

const router = Router();

router.get('/firstpage', (req, res) => {
    const allBooksFirstPage = Book.findAll()
    res.json(allBooksFirstPage)
});

router.get('/mainpage', (req, res) => {
    const allbooksMainPage = Book.findAll()
    res.json(allbooksMainPage)
});

router.get('/newbook', (req, res) => {
    const { name, title, author, img }  = req.body
    const newbook = Book.create({name, title, author, img})
    res.sendStatus(200)
});

export default router