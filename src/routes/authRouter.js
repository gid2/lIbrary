import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = Router();

router.get('/reg', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});
router.get('/login', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.post('/reg', async (req, res) => {
  try {
    // console.log(req.body, 'reqbody');
    const { login, email, password: pass } = req.body;
    const password = await bcrypt.hash(pass, 7);
    const currUser = await User.create({ login, email, password });
    req.session.user = {
      id: currUser.id,
      login: currUser.login,
      email: currUser.email,
    };
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post('/login', async (req, res) => {
  // console.log(req.body, 'reQBODY');
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  if (currUser) {
    const compare = await bcrypt.compare(password, currUser.password);
    if (compare) {
      req.session.user = {
        id: currUser.id,
        login: currUser.login,
        email: currUser.email,
      };
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/firstpage');
});

export default router;
