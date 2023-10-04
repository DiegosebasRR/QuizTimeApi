import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
cloudinary.config({
  cloud_name: <string>process.env.CLOUDINARY_CLOUD_NAME,
  api_key: <string>process.env.CLOUDINARY_API_KEY,
  api_secret: <string>process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadImage = async (filePath: any) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "imagesQues",
  });
};

export const deleteImage = async (publicId: any) => {
  return await cloudinary.uploader.destroy(publicId);
};
