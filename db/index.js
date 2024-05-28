const mongoose = require("mongoose");

console.log("Attempting to connect to MongoDB...");
mongoose
  .connect(
    "mongodb+srv://test_user:test_pwd@cluster0.ay0jjxa.mongodb.net/auth-app",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
