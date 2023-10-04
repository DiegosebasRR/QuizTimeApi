import { Questionnaire } from "../interfaces/questionnaire.interface";
import { model, Schema } from "mongoose";

const QuestionnaireSchema = new Schema<Questionnaire>({
  titles: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  question: [{ type: Schema.Types.ObjectId, ref: "question", required: true }],
  participant: [
    { type: Schema.Types.ObjectId, ref: "participant", required: true },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  image: {
    secure_url: String,
    public_id: String,
  },
});
QuestionnaireSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});
const QuestionnaireModel = model("questionnaire", QuestionnaireSchema);

export default QuestionnaireModel;
