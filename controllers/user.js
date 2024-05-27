const User = require("../model/user");
const verificationToken = require("../model/verificationToken");
const { sendError } = require("../utils/helper");
const jwt = require("jsonwebtoken");
const {
  generateOTP,
  mailTransport,
  generateEmailTemplate,
} = require("../utils/mail");

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return sendError(res, "This email already exists!");

  const newUser = new User({
    name,
    email,
    password,
  });

  const OTP = generateOTP();
  const verificationToken = new verificationToken({
    owner: newUser._id,
    token: OTP,
  });

  await verificationToken.save();
  await newUser.save();

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: newUser.email,
    subject: "verify your email Account",
    html: generateEmailTemplate(OTP),
  });
  //console.log("Body:", req.body);
  res.send(newUser);
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email.trim() || !password.trim())
    return sendError(res, "email/password missing!");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not Found!");

  const isMatched = await user.comparePassword(password);
  if (!isMatched) return sendError(res, "email/password does not match!");

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({
    success: true,
    user: { name: user.name, email: user.email, id: user._id, token },
  });
};
