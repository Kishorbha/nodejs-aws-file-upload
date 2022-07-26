const userService = require("../services/user");
const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");
const userToSend = require("../dtos/user");

require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const createUser = async (req, res, next) => {
  let myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}.${fileType}`,
    Body: req.file.buffer,
  };

  try {
    s3.upload(params, async (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        req.body.avatar = data.Location;
        const payload = req.body;
        const result = await userService.store(payload);
        res.json(result);
      }
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await userService.getAllusers();
    const dataToSend = [];
    result.map((user) => {
      dataToSend.push(userToSend(user));
    });
    res.json(dataToSend);
  } catch (error) {
    next(error);
  }
};

const userController = {
  createUser,
  getUser,
};
module.exports = userController;
