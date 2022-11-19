import express from "express";
import { signin, signup, googleSignin } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/googleSignin", googleSignin);
router.post("/signup", signup);

export default router;
