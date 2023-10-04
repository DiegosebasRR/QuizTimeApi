import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";
import { checkJwt } from "../middleware/session";
import fileUpload from "express-fileupload";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

export { router };
