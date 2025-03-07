import {Router} from 'express';
import { login, signUp, virefiyEmail } from './auth.controller.js';
import { validate } from '../../middleware/vlaidation.js';
import { loginSchema, signupSchema } from './auth.validate.js';


const router = Router();

router.post('/signup',validate(signupSchema),signUp);
router.put('/virefiy/:id',virefiyEmail);
router.post('/login',validate(loginSchema),login);


export default router;