import { Router } from "express";
import {
  deleteQuestionnaireCtrl,
  getQuestionnaireCtrl,
  getQuestionnairesCtrl,
  postQuestionnaireCtrl,
  updateQuestionnaireCtrl,
  getUserQuestionnairesCtrl,
} from "../controllers/questionnaire";

const router = Router();

router.get("/", getQuestionnairesCtrl);

router.get("/:id", getQuestionnaireCtrl);

router.post("/", postQuestionnaireCtrl);

router.put("/:id", updateQuestionnaireCtrl);

router.delete("/:id", deleteQuestionnaireCtrl);

router.get("/byUser/:userId", getUserQuestionnairesCtrl);

export { router };
