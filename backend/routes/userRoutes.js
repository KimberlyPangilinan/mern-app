import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

router.get('/auth', authUser)

export default router;