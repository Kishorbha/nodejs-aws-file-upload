const router = require("express").Router();
const user = require("./routes/user");

router.use("/users", user);

module.exports = router;
