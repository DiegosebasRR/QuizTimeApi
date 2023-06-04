import { Questionnaire } from "../interfaces/questionnaire.interface";
import { model, Schema } from "mongoose";

const QuestionnaireSchema = new Schema<Questionnaire>({
  titles: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  userId: { type: String, required: true },
  participants: { type: Array<String> },
  questions: { type: Array<String> },
});

const QuestionnaireModel = model("Questionnaire", QuestionnaireSchema);

export default QuestionnaireModel;
