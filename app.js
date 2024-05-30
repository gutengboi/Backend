const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");

const bodyParser = require("body-parser");

const userRouter = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors());

// Use built-in middleware to parse JSON bodies
app.use(express.json());

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
