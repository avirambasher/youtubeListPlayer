import express from 'express';
import { getPlayList, addUrl, deleteUrl } from '../controllers/rest.js';

const router = express.Router();

router.get('/',getPlayList);
router.post('/',addUrl);
router.delete('/:id',deleteUrl);

export default router;