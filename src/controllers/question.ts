import { Response, Request } from "express";
import {
  createQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} from "../services/question";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";
const postQuestionCtrl = async (req: any, res: Response) => {
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
    const response = await createQuestion(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getQuestionsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getQuestions();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getQuestionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getQuestion(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateQuestionCtrl = async (req: any, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const responseGet = await getQuestion(id);
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
    const response = await updateQuestion(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteQuestionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseGet = await getQuestion(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
    const response = await deleteQuestion(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postQuestionCtrl,
  getQuestionCtrl,
  updateQuestionCtrl,
  deleteQuestionCtrl,
  getQuestionsCtrl,
};
