const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(user, "your-256-bit-secret", { expiresIn: "1800s" });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "your-256-bit-secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authorizeEditor(req, res, next) {
  if (req.user && req.user.role === "editor") {
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = { generateAccessToken, authenticateToken, authorizeEditor };
