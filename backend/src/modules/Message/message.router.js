import {Router} from 'express';
import { sendMessage, updateStatus } from './message.controller.js';
import { auth } from '../../middleware/auth.js';
import { messageSchema } from './message.validate.js';
import { validate } from '../../middleware/vlaidation.js';
const router =Router();

router.post('/send',auth(),validate(messageSchema),sendMessage);

router.put('/status/:id',auth(),updateStatus);



export default router;