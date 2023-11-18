//require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create a schema for shoe shoes, all fields are required except material, laces & sole
const ShoeSchema = new Schema({
  brand: { type: String, required: true },
  size: { type: Number, required: true },
  laces: { type: String, required: true },
  sole_bottom: { type: String, required: true },
  sole_top: { type: String, required: true },
  inside: { type: String, required: true },
  outside_1: { type: String, required: true },
  outside_2: { type: String, required: true },
  outside_3: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  user: { type: String, required: true },
});

//export the model
module.exports = mongoose.model("shoes", ShoeSchema);