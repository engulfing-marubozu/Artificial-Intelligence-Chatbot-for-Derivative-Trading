import express from 'express'
const router = express.Router();
import {postAlgo}  from '../Controllers/postAlgo.js';
import { getAlgoList } from '../Controllers/getAlgoList.js';
import { editAlgo } from '../Controllers/editAlgo.js';
import {sendSpecificAlgo } from '../Controllers/sendSpecificAlgo.js';
import chatbotResponse from '../Controllers/chatbotResponse.js';

router.post('/saveAlgo', postAlgo);
router.post('/editAlgo', editAlgo);
router.get('/getAlgoList', getAlgoList);
router.post('/chatbotResponse', chatbotResponse);
router.get('/sendSpecificAlgo', sendSpecificAlgo);
export default router

