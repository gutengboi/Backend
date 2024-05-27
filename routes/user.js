const router = require("express").Router();
const { createUser, signIn } = require("../controllers/user");
const { validateUser, validate } = require("../middlewares/validator");

router.post(
  "/create",
  (req, res, next) => {
    req.on("data", (chunk) => {
      req.body = JSON.parse(chunk);
      next();
    });
  },
  validateUser,
  validate,
  createUser
);

router.post(
  "/signIn",
  // (req, res, next) => {
  //   req.on("data", (chunk) => {
  //     req.body = JSON.parse(chunk);
  //     next();
  //   });
  // },
  signIn
);

module.exports = router;
