import ParticipantModel from "../models/participant";
import { Participant } from "../interfaces/participant.interface";
import QuestionnaireModel from "../models/questionnaire";
const createParticipant = async (participant: Participant) => {
  const responseCreate = await ParticipantModel.create(participant);
  const questionnaire = await QuestionnaireModel.findById(
    participant.questionnaire
  );
  if (questionnaire) {
    questionnaire.participant.push(responseCreate._id);
    await questionnaire.save();
  } else {
    console.log(`El cuestionario no fue encontrado.`);
  }
  return responseCreate;
};
const getParticipants = async () => {
  const responseGet = await ParticipantModel.find({});
  return responseGet;
};
const getParticipant = async (id: string) => {
  const responseGet = await ParticipantModel.findOne({ _id: id });
  return responseGet;
};
const updateParticipant = async (id: string, data: Participant) => {
  const responseUpdate = await ParticipantModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};
const deleteParticipant = async (id: string) => {
  const responseDelete = await ParticipantModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createParticipant,
  deleteParticipant,
  getParticipant,
  getParticipants,
  updateParticipant,
};
