const jwt = require("jsonwebtoken");


/* Middleware function, we can add it to any routes that routes we want to be protected */

module.exports = function (req, res, next) {
  // get token from header
  const token = req.header("auth-token");
  // check, if token does not, send message on response
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // check, if token verified add it to user. (compare token from req.header with SECRET)
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
  next();
};
