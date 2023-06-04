import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const clearName = cleanFileName(fileName);

  if (clearName !== "index") {
    import(`./${clearName}`).then((moduleRouter) => {
      console.log(clearName);
      router.use(`/${clearName}`, moduleRouter.router);
    });
  }
});

export { router };
