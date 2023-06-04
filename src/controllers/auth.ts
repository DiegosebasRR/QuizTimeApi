import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "Password_incorrect") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
