const userModel = require("../modules/user");
const mapper = require("../mappers/user");

const store = async (payload) => {
  const model = new userModel({});
  mapper(model, payload);
  const saver = await model.save();
  return saver;
};
const getAllusers = async () => {
  const users = await userModel.find().sort({ createdAt: -1 });
  return users;
};

const userService = {
  store,
  getAllusers,
};

module.exports = userService;
