import { User } from "../interfaces/user.interface";
import { Schema, model } from "mongoose";

const UserSchema = new Schema<User>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model("user", UserSchema);

export default UserModel;
