import { Router } from "express";
import {
  deleteParticipantCtrl,
  getParticipantCtrl,
  getParticipantsCtrl,
  postParticipantCtrl,
  updateParticipantCtrl,
} from "../controllers/participant";

const router = Router();

router.get("/", getParticipantsCtrl);

router.get("/:id", getParticipantCtrl);

router.post("/", postParticipantCtrl);

router.put("/:id", updateParticipantCtrl);

router.delete("/:id", deleteParticipantCtrl);

export { router };
