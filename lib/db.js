const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, (err) => {
  if (err) throw err;
  console.log("mongo database connected");
});
