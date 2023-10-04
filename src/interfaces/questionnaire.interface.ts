import { Types } from "mongoose";

export interface Questionnaire {
  titles: string;
  description: string;
  question: Array<Types.ObjectId>;
  participant: Array<Types.ObjectId>;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  image: any;
}
