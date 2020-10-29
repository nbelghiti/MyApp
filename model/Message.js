//const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  receiverId: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  message: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  received: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Message", messageSchema);
