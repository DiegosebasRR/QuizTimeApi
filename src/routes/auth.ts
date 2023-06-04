import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

export { router };
