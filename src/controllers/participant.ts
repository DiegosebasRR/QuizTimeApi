import { Response, Request } from "express";
import {
  createParticipant,
  deleteParticipant,
  getParticipant,
  getParticipants,
  updateParticipant,
} from "../services/participant";

const postParticipantCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createParticipant(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getParticipantsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getParticipants();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getParticipantCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getParticipant(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateParticipantCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateParticipant(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteParticipantCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteParticipant(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  deleteParticipantCtrl,
  getParticipantCtrl,
  getParticipantsCtrl,
  postParticipantCtrl,
  updateParticipantCtrl,
};
