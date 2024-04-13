const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://vinayvemula94:easyChits123@cluster0.u8lefn2.mongodb.net/EasyChits-Dev";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
