import QuestionnaireModel from "../models/questionnaire";
import { Questionnaire } from "../interfaces/questionnaire.interface";

const createQuestionnaire = async (questionnaire: Questionnaire) => {
  const responseCreate = await QuestionnaireModel.create(questionnaire);
  return responseCreate;
};

const getQuestionnaires = async () => {
  const responseGet = await QuestionnaireModel.find({})
    .populate("question")
    .populate("participant");
  return responseGet;
};

const getQuestionnaire = async (id: string) => {
  const responseGet = await QuestionnaireModel.findOne({ _id: id })
    .populate("question")
    .populate("participant");
  return responseGet;
};

const getUserQuestionnaires = async (userId: string) => {
  const responseGet = await QuestionnaireModel.find({
    userId: userId,
  }).populate("question");
  return responseGet;
};

const updateQuestionnaire = async (id: string, data: Questionnaire) => {
  const responseUpdate = await QuestionnaireModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};

const deleteQuestionnaire = async (id: string) => {
  const responseDelete = await QuestionnaireModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createQuestionnaire,
  getQuestionnaire,
  getQuestionnaires,
  updateQuestionnaire,
  deleteQuestionnaire,
  getUserQuestionnaires,
};
