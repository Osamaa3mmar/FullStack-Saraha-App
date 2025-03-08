import {Router}from 'express';
import { getAllUsers, getProfile, getSpecificUser, setProfileImage } from './user.controller.js';
import { auth } from '../../middleware/auth.js';

const router = Router();

router.get('/',getAllUsers);

router.get('/:id',auth(),getSpecificUser);
router.get('/profile/:id',auth(),getProfile);
router.put('/setprofileimage/:id',auth(),setProfileImage);




export default  router;