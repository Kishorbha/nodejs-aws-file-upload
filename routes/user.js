const upload = require("../middleware/upload");
const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/store", upload().single("profile"), userController.createUser);
router.get("/", userController.getUser);

module.exports = router;
