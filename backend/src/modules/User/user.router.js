import {Router}from 'express';
import { getAllUsers, getSpecificUser } from './user.controller.js';
import { auth } from '../../middleware/auth.js';

const router = Router();

router.get('/',auth(),getAllUsers);

router.get('/:id',auth(),getSpecificUser);




export default  router;