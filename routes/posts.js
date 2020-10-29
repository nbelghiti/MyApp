const router = require("express").Router();
const Message = require("../model/Message");
const verify = require("../utils/verifyToken");
const { messageValidation } = require("../utils/validation");

router.post("/messages/new", verify, async (req, res) => {
  const { error } = messageValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const msg = new Message({
    receiverId: req.body.receiverId,
    senderId: req.body.senderId,
    message: req.body.message,
  });

  try {
    const savedMessage = await msg.save();
    res.send({ savedMessage });
  } catch (err) {
    res.status(400).send(err);
  }
  /*
  const savedMessage = req.body;
  Message.create(savedMessage, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(201).send(data);
  });*/
});
router.get("/messages", verify, (req, res) => {
  Message.find((err, data) => {
    if (err) res.status(500).send(err);
    res.status(201).send(data);
  });
});
module.exports = router;
