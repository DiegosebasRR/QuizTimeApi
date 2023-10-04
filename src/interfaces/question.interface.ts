import { Types } from "mongoose";

export interface Question {
  questionnaire: Types.ObjectId;
  question: string;
  answerOptions?: Array<string>;
  correctAnswer: number;
  image: any;
}
