const mongoose = require("mongoose");
exports.connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Databse connected");
  } catch (error) {
    console.log(error.message);
  }
};
