import { Router } from 'express';
import { Book } from '../db/models';

const router = Router();

router.get('/firstpage', async (req, res) => {
  const allBooksFirstPage = await Book.findAll();
  console.log(allBooksFirstPage, 'allBooksFirstPage------>');
  res.json(allBooksFirstPage);
});

router.get('/mainpage', async (req, res) => {
  const allbooksMainPage = await Book.findAll();
  res.json(allbooksMainPage);
});

router.get('/newbook', async (req, res) => {
  const {
    name, title, author, img,
  } = req.body;
  const newbook = await Book.create({
    name, title, author, img,
  });
  res.sendStatus(200);
});

router.get('/favourite', async (req, res) => {
  const favouritebooks = await Book.findAll();
  console.log(favouritebooks);
  res.json(favouritebooks);
});

export default router;
