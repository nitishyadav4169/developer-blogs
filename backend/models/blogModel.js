const { Schema, model } = require("../connection");

const myschema = new Schema({
  title: String,
  description: String,
  image: String,
  content: String,
  createdAt: Date,
});
module.exports = model("blogs", myschema);
