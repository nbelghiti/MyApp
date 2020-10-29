const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
//Import Router
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const port = process.env.PORT || 5000;
const app = express();

// const Pusher = require("pusher");

// const pusher = new Pusher({
//   appId: "1093868",
//   key: "016a8f829d23549d6669",
//   secret: "fd0df6e8ccf75e59689f",
//   cluster: "eu",
//   encrypted: true,
// });

dotenv.config();

//connecte to DB

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongoDB")
);
// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("db connected");
//   const msgCollection = db.collection("Message");
//   const changeStream = msgCollection.watch();
//   changeStream.on("change", (change) => {
//     console.log("change", change);
//     if (change.operationType === "insert") {
//       const messageDetails = change.fullDocument;
//       console.log("messageDetails", messageDetails);
//       pusher.trigger("whatsapp", "change", { message: "hello world" });
//     } else {
//       console.log("Error triggering Pusher");
//     }
//   });
// });
//Middelware
app.use(express.json());
app.use(cors());
//bodyParser app.use(bodyParser.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => console.log("server Up"));
