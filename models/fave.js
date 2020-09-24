const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faveSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

// Ensure that initials are uppercase & not longer than 3 characters
faveSchema.pre("save", function (next) {
  this.initials = this.initials.substr(0, 100).toUpperCase();
  next();
});

module.exports = mongoose.model("Fave", faveSchema);
