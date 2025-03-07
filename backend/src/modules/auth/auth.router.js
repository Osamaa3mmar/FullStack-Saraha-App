import {Router} from 'express';
import { signUp, virefiyEmail } from './auth.controller.js';


const router = Router();

router.post('/signup',signUp)
router.put('/virefiy/:id',virefiyEmail);



export default router;