var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    product: { type: String, required: true },
    quality: { type: Number, default: 0 },
    url: { type: String, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
