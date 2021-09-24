const mongoose = require("mongoose");

const gg = new mongoose.Schema({
	jaja: {
		type: Boolean,
		required: false,
		default: false,
	},
	guild: {
		type: String
	},

})

module.exports = mongoose.model("antilinkzzz", gg);