const mongoose = require('mongoose')
const AFKSchema = new mongoose.Schema({
userId: {
  type: String,
  required: true,
},
guildId: {
  type: String,
  required: true,
},
AFK: {
  type: Boolean,
  default: false,
},
AFK_Reason: {
  type: String,
  default: null,
},
timeAgo: {
	type: Number,
	required: false,
}

})

module.exports = mongoose.model('afk', AFKSchema)