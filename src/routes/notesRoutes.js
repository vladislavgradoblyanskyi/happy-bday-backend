import { Router } from 'express';
import {getAllImages,getImageById,createImage} from '../controllers/notesController.js';

const router = Router();

router.get('/images',getAllImages);
router.get('/images/:imageId', getImageById);
router.post('/images', createImage);


export default router;
