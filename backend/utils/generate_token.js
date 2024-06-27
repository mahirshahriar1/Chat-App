import jwt from "jsonwebtoken";

// const generate_token_and_set_cookie = (userId, res) => {
// 	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
// 		expiresIn: "15d",
// 	});

// 	res.cookie("jwt", token, {
// 		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
// 		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
// 		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
// 		secure: process.env.NODE_ENV !== "development", // if node env is not development then secure is true
// 	});
// };

const generate_tokens_and_cookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("refreshToken", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // if node env is not development then secure is true
  });
};

export default generate_tokens_and_cookies;
