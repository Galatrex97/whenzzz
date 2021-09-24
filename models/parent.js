const mongoose = require("mongoose")

let parentSchema = new mongoose.Schema({
  parentId: {
    type: String,
    required: true
  },
  guildId: {
    type: String,
    required: true
  },

})

module.exports = mongoose.model('Parent', parentSchema)