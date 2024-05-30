const router = require("express").Router();
const {
  createUser,
  signIn,
  verifyEmail,
  forgetPassword,
  resetPassword,
} = require("../controllers/user");
const { isResetTokenVaild } = require("../middlewares/user");
const { validateUser, validate } = require("../middlewares/validator");

router.post("/create", validateUser, validate, createUser);
router.post("/signIn", signIn);
router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", isResetTokenVaild, resetPassword);
router.get("/verify-token", isResetTokenVaild, (req, res) => {
  res.json({ success: true });
});

module.exports = router;
