const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string()
      .min(6)
      .required()
      .max(15)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required().max(15),
  });
  return schema.validate(data);
};

const messageValidation = (data) => {
  const schema = Joi.object({
    senderId: Joi.string().min(6).required(),
    receiverId: Joi.string().min(6).required(),
    message: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.messageValidation = messageValidation;
