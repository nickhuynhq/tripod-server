import jwt from "jsonwebtoken";

// User wants to like a post
// User clicks like button => auth middleware (next) => like controller

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(" ")[1];
    // Check if token is Google Auth or my Custom Auth
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
