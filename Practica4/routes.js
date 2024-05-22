const express = require("express");
const router = express.Router();
const {
  generateAccessToken,
  authenticateToken,
  authorizeEditor,
} = require("./auth.js");

router.post("/login", (req, res) => {
  const user = { id: 1, username: "John", admin: true, role: 'editor' };
  const token = generateAccessToken(user);
  res.json({ token: token });
});

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ title: "Protected data", user: req.user });
});

router.get("/admin", authenticateToken, authorizeEditor, (req, res) => {
  if (req.user.admin !== true) return res.sendStatus(403);
  res.json({ title: "Admin data", user: req.user });
});

router.get("/editor", authenticateToken, authorizeEditor, (req, res) => {
  res.json({ title: "Editor data", user: req.user });
});

module.exports = router;
