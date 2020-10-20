const router = require("express").Router();
const verify = require("../utils/verifyToken");

//LogIn
router.get("/", verify, (req, res) => {
  res.send(req.user);
  //   res.json({
  //     posts: {
  //       title: "nabil",
  //       description: "random data you shouldn't access",
  //     },
  //   });
});
module.exports = router;
