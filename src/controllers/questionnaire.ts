import { Request, Response } from "express";
import {
  createQuestionnaire,
  deleteQuestionnaire,
  getQuestionnaire,
  getQuestionnaires,
  updateQuestionnaire,
  getUserQuestionnaires,
} from "../services/questionnaire";

const getQuestionnaireCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getQuestionnaire(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

const getUserQuestionnairesCtrl = async (
  { params }: Request,
  res: Response
) => {
  try {
    const { userId } = params;
    console.log(userId);
    const response = await getUserQuestionnaires(userId);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const getQuestionnairesCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getQuestionnaires();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const postQuestionnaireCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createQuestionnaire(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const updateQuestionnaireCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateQuestionnaire(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteQuestionnaireCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteQuestionnaire(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  getQuestionnaireCtrl,
  deleteQuestionnaireCtrl,
  getQuestionnairesCtrl,
  updateQuestionnaireCtrl,
  postQuestionnaireCtrl,
  getUserQuestionnairesCtrl,
};
