import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";

import UserModel from "../models/auth";
import { encrypted, verified } from "../utils/bcrypt.handle";

import { generateToken } from "../utils/jwt.handle";
const registerNewUser = async ({
  firstname,
  lastname,
  email,
  password,
  image,
}: User) => {
  const userExists = await UserModel.findOne({ email });
  if (userExists) return "User_exists";
  const passHash = await encrypted(password);
  const registerNewUser = await UserModel.create({
    firstname,
    lastname,
    email,
    password: passHash,
    image,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const userExists = await UserModel.findOne({ email });
  if (!userExists) return "User_not_exist ";
  const passwordHash = userExists.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "Password_incorrect";
  const token = generateToken(userExists.email);
  const data = {
    token,
    user: userExists,
  };
  return data;
};

export { registerNewUser, loginUser };
