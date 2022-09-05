import express from 'express';
import {
  currentUser,
  signin,
  signout,
  signup,
} from '../Controllers/user.controllers';

const router = express.Router();

router.get('/api/v1/users/currentuser', currentUser);

router.post('/api/v1/users/signin', signin);

router.delete('/api/v1/users/signout', signout);

router.post('/api/v1/users/signup', signup);

export { router as userRoutes };
