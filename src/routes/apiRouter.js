import { Router } from 'express';
import { Book, Comment, Like } from '../db/models';

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

router.post('/like/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [like, isCreated] = await Like.findOrCreate({ where: { bookId: id, userId: req.session.user.id } });
    if (!isCreated) await Like.destroy({ where: { bookId: id, userId: req.session.user.id } });
    res.json(like);
  } catch {
    res.sendStatus(418);
  }
});

router.get('/mainpage', async (req, res) => {
  const allbooksMainPage = await Book.findAll();
  res.json(allbooksMainPage);
});

router.post('/newbook', async (req, res) => {
  const {
    name, title, author, img,
  } = req.body;
  // console.log(req.body, 'req.body from server ---------!!');
  const newbook = await Book.create({
    name, title, author, img,
  });
  res.sendStatus(200);
});

export default router;
