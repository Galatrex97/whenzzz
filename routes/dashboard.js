const { auth } = require("../middleware/auth");
const express = require("express")
const routerxd = express.Router();

routerxd.get("/dashboard", auth, (req, res) => {
	let guilds = req.user.guilds.filter(xD => (xD.permissions & 8) === 8)
	let servidores = [];

for(let key in guilds) {
	if(req.bclient.guilds.cache.get(guilds[key])) {
		servidores.push({
			está: true,
			id: req.bclient.guilds.cache.get(guilds[key]).id,
			name: req.bclient.guilds.cache.get(guilds[key]).name,
			icon: req.bclient.guilds.cache.get(guilds[key]).icon
		})
	} else {
			servidores.push({
			está: false,
			id: req.bclient.guilds.cache.get(guilds[key]).id,
			name: req.bclient.guilds.cache.get(guilds[key]).name,
			icon: req.bclient.guilds.cache.get(guilds[key]).icon
		})
	}
}

    res.render("dashboard", {
      user: req.user,
			servidores,
     });
});
routerxd.get("/dashboard/:id", auth, (req, res) => {
  let id = req.params.id;
  let servidor = req.bclient.guilds.cache.get(id);
  let canales = servidor.channels.cache;
let avatarxd = req.bclient.user.displayAvatarURL();
  res.render("dashboard", {
    user: req.user,
    servidor,
    canales,
		avatarxd
  });
});

module.exports = routerxd;
