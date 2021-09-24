const Monitor = require("ping-monitor")
const express = require('express')
const server = express();
const session = require("express-session");
const passport = require("./passport");

const path = require('path');


module.exports = client => {

  async function keepAlive() {
    await server.listen(3000, () => {
			client.on("ready", () => {
							console.log("Servidor Listo.")
			})
    });
    return true;
}


server.use(express.static("views"))
server.use(
	session({
      secret: "vektordashboard",
      resave: false,
      saveUninitialized: false,
    })
)
  server.use(passport.initialize())
  server.use(passport.session())
	server.use((req, res, next) => {
		req.bclient = client
		next();
	})
server.use(client.router)
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'))



	keepAlive();
client.monitor = new Monitor({
	  website: 'Clark.galatrex.repl.co',
    title: 'Vektor',
    interval: 5,
})


}