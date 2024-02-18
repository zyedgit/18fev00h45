
/* Gérer les différentes routes liées aux opérations utilisateur dans une application.
Chaque route est associée à une fonction de contrôleur correspondante, 
et certaines routes nécessitent également une vérification du token pour garantir l'authentification de l'utilisateur. */

import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;
