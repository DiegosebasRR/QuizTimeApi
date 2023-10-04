import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import UserModel from "../models/auth";
import fs from "fs-extra";
const registerController = async (req: any, res: Response) => {
  const { firstname, lastname, email, password } = req.body;

  const newData = new UserModel({
    firstname,
    lastname,
    email,
    password,
  });

  if (req.files?.image) {
    const result = await uploadImage(req.files.image.tempFilePath);
    newData.image = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };
    await fs.unlink(req.files.image.tempFilePath);
  }
  const responseUser = await registerNewUser(newData);
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
