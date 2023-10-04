import { Router } from "express";
import {
  postQuestionCtrl,
  getQuestionCtrl,
  getQuestionsCtrl,
  updateQuestionCtrl,
  deleteQuestionCtrl,
} from "../controllers/question";

const router = Router();

router.get("/", getQuestionsCtrl);

router.get("/:id", getQuestionCtrl);

router.post("/", postQuestionCtrl);

router.put("/:id", updateQuestionCtrl);

router.delete("/:id", deleteQuestionCtrl);

export { router };
