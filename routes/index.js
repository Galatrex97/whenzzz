const express = require("express");
const passport = require("passport");
const { auth } = require("../middleware/auth");
module.exports = client => {

client.router = express.Router();

  client.router.get("/", (req, res) => {
		res.render('index', { commandsnum: client.commands.size, servers: client.guilds.cache.size, users: client.users.cache.size, avatar: client.user.displayAvatarURL() })
	}) 

client.router.get("/login", passport.authenticate("discord"), (req, res) => {
  res.redirect("/dashboard");
});


client.router.use("/", require("./dashboard"))

}
