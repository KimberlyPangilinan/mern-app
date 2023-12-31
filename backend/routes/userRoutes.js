import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('logout', logoutUser)
router.get('/profile', getUserProfile)
router.put('/profile', updateUserProfile)
export default router;