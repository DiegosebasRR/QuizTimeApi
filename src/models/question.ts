import { Schema, model } from "mongoose";
import { Question } from "../interfaces/question.interface";

const QuestionSchema = new Schema<Question>({
  questionnaire: {
    type: Schema.Types.ObjectId,
    ref: "questionnaire",
    required: true,
  },
  question: {
    required: true,
    type: String,
  },
  answerOptions: {
    required: true,
    type: Array<String>,
  },
  correctAnswer: {
    required: true,
    type: Number,
  },
  image: {
    secure_url: String,
    public_id: String,
  },
});

const QuestionModel = model("question", QuestionSchema);

export default QuestionModel;
