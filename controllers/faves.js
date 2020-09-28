var Fave = require("../models/fave");

module.exports = {
  create,
  faves
};
async function create(req, res) {
  console.log("user: ", req.user);
  try {
    await Fave.create(req.body);
    // Use the highScores action to return the list
    faves(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function faves(req, res) {
  const faves = await Fave.find({})
  res.json(faves);
}