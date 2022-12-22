import express from 'express';
import { Book } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const oneBook = await Book.findAll();
  const initState = { oneBook };
  res.render('Layout', initState);
});

router.get('/', (req, res) => {
  const initState = { title: 'Home' };
  res.redirect('/auth/reg');
});

export default router;
