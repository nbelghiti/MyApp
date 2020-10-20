//const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
// const Joigoose = require("joigoose")(mongoose);
// const joiSchema = Joi.object({
//   name: Joi.string().min(6).required(),
//   email: Joi.string().min(6).required().email(),
//   password: Joi.string()
//     .min(6)
//     .required()
//     .max(15)
//     .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//   date: Joi.date().default(Date.now()),
// });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema);
