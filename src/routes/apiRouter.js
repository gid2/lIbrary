import { Router } from 'express';
import {
  Book, Comment, Like, User,
} from '../db/models';
import like from '../db/models/like';

const router = Router();

router.get('/firstpage', async (req, res) => {
  const allBooksFirstPage = await Book.findAll();
  res.json(allBooksFirstPage);
});

router.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const oneBook = await Book.findByPk(id, { include: [Comment, User] });
  res.json(oneBook);
});

router.post('/comment/:id', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const book = await Comment.create({ comment, userId: req.session.user.id, bookId: id });
  res.json(book);
});
router.post('/login/:id', async (req, res) => {
  const { id } = req.params;
  const login = await Comment.findAll({ where: { bookId: id }, include: User });
  res.json(login);
});

router.post('/like/:id', async (req, res) => {
  const currLike = 0;
  const { id } = req.params;
  const likes = await Like.create({ like: currLike, bookId: id, userId: req.session.user.id });
  res.json(likes);
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


// router.get('/book/:id', async (req, res) => {
//   const { id } = req.params;
//   const favouriteBook  = await Book.findByPk(id);
//   console.log(favouriteBook, 'favouriteBook---++');
//   const favouriteBookWriter = await Favourites.create({favouriteBook})
//   console.log(favouriteBookWriter, '------favouriteBookWriter??');
// }); //это ручка которая записывает в базу книгу при нажатии кнопки избранное 

router.get('/favourite', async (req, res) => {
  const favouritebooks = await Book.findAll({ where: { userId: req.session.user.id } });
  res.json(favouritebooks);
});

export default router;
