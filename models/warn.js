const mongoose = require('mongoose')

let nya = new mongoose.Schema({
  guildId: String,
  userId: String,
  content: Array

})

module.exports = mongoose.model("Warn", nya)