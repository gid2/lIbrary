import { Router } from 'express';
import { Book, Comment } from '../db/models';

const router = Router();

router.get('/firstpage', async (req, res) => {
  const allBooksFirstPage = await Book.findAll();
  res.json(allBooksFirstPage);
});

router.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const oneBook = await Book.findByPk(id, { include: [Comment] });
  res.json(oneBook);
});

router.post('/comment/:id', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const book = await Comment.create({ comment, userId: req.session.user.id, bookId: id });
  res.json(book);
});

router.get('/mainpage', async (req, res) => {
  const allbooksMainPage = await Book.findAll();
  res.json(allbooksMainPage);
});

router.post('/newbook', async (req, res) => {
  const {
    name, title, author, img,
  } = req.body;
  const userId = req.session.user.id;
  const newbook = await Book.create({
    name, title, author, img, userId,
  });
  res.sendStatus(200);
});

router.get('/favourite', async (req, res) => {
  const favouritebooks = await Book.findAll({ where: { userId: req.session.user.id } });
  res.json(favouritebooks);
});

export default router;
