module.exports = (model, payload) => {
  const {
    name,
    email,

    avatar,
  } = payload;
  if (name) model.name = name;
  if (avatar) model.avatar = avatar;
  if (email) model.email = email;
};
