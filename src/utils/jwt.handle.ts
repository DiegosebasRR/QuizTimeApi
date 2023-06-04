import { verify, sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.1212121";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (token: string) => {
  const isCorrect = verify(token, JWT_SECRET);
  return isCorrect;
};

export { generateToken, verifyToken };
