import express from "express";
const router = express.Router();
import { create } from "../controllers/user.controller.js";



router.post('/create',create);
router.get('/getInfo',)
export default router;