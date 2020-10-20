const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//Import Router
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//connecte to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to mongoDB")
);

//Middelware
app.use(express.json());
//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(4040, () => console.log("server Up"));
