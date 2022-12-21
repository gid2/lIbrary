import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { title: 'Home' };
  res.redirect('/auth/reg');
});

export default router;
