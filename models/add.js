const mongoose = require("mongoose")
const addb = new mongoose.Schema({
  Guild: { type: String },
  Channel: { type: String }
});

module.exports = mongoose.model("beinvenidas", addb)