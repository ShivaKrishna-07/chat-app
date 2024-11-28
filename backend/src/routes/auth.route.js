import express from 'express'

import { protectRoute } from '../middlewares/auth.middleware.js';
import { checkAuth, login, logout, signup, updateRoute } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login",  login);
router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateRoute);
router.get("/check", protectRoute, checkAuth)

export default router;