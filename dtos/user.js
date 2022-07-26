const formatDate = require("../lib/date-formate");

const userToSend = (payload) => {
  const { _id, name, avatar, email } = payload;
  const user_to_send = {
    _id,
    name,
    avatar,
    created_at: formatDate(payload.createdAt),
    email,
  };
  return user_to_send;
};
const clientDtos = {
  userToSend,
};
module.exports = userToSend;
