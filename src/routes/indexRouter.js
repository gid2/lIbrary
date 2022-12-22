import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/firstpage');
});
router.get('/', async (req, res) => {
  res.render('Layout');
});
router.get('/firstpage', async (req, res) => {
  res.render('Layout');
});
router.get('/mainpage', async (req, res) => {
  res.render('Layout');
});
router.get('/newbook', async (req, res) => {
  res.render('Layout');
});
router.get('/book', async (req, res) => {
  res.render('Layout');
});
router.get('/book/:id', async (req, res) => {
  res.render('Layout');
});

export default router;
