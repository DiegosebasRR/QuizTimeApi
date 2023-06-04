import { hash, compare } from "bcryptjs";

const encrypted = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, passwordHash: string) => {
  const isCorrect = await compare(pass, passwordHash);
  return isCorrect;
};

export { encrypted, verified };
