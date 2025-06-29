import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "7d",
  });
  res.cookie("chatspacejwt", token, {
    httpOnly: true, 
    secure: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 7 * 1000,
  });
};
export default createTokenAndSaveCookie;
