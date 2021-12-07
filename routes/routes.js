import express from 'express';
import { homePage, mainPage } from '../controllers/pages.js';

const router = express.Router();

router.get('/', homePage)
router.get('/main', mainPage)
router.get('/', )
router.get('/', )
router.get('/', )
router.get('/', )

export default router;