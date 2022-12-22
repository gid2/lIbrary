import express from 'express';

const router = express.Router();


router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/', (req, res) => {
  res.redirect('/firstpage');
});


export default router;
