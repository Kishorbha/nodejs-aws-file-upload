const multer = require("multer");
const AWS = require("aws-sdk");

module.exports = () => {
  const multerConf = {
    storage: multer.memoryStorage({
      destination: function (req, file, callback) {
        callback(null, "");
      },
    }),
  };

  const upload = multer({
    storage: multerConf.storage,
  });
  return upload;
};
