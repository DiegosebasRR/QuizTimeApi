import { Types } from "mongoose";

export interface Participant {
  questionnaire: Types.ObjectId;
  name: string;
}
