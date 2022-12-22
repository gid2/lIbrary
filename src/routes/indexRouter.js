import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});


router.get('/', (req, res) => {
  const initState = { title: 'Home' };
  res.redirect('/auth/reg');
});

export default router;
