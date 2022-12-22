import { Router } from 'express';
import { Book } from '../db/models';

const router = Router();

router.get('/firstpage', async (req, res) => {
  const allBooksFirstPage = await Book.findAll();
  res.json(allBooksFirstPage);
});

router.get('/mainpage', async (req, res) => {
  const allbooksMainPage = await Book.findAll();
  console.log('#$%$#%$#^$#^%$#%$');
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

export default router;
