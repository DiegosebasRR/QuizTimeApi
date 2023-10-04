import { Request, Response } from "express";
import {
  createQuestionnaire,
  deleteQuestionnaire,
  getQuestionnaire,
  getQuestionnaires,
  updateQuestionnaire,
  getUserQuestionnaires,
} from "../services/questionnaire";
import { uploadImage, deleteImage } from "../utils/cloudinary";
import fs from "fs-extra";

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
const postQuestionnaireCtrl = async (req: any, res: Response) => {
  try {
    const { body } = req;
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      body.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
    const response = await createQuestionnaire(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const updateQuestionnaireCtrl = async (req: any, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const responseGet = await getQuestionnaire(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      body.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
    const response = await updateQuestionnaire(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteQuestionnaireCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseGet = await getQuestionnaire(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
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
