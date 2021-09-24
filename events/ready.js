	const Discord = require('discord.js');
const Distube = require('distube')
const { glob } = require("glob");
const { promisify } = require("util");
const moment = require('moment')

module.exports.run = async (client) => {
	
const mongoose = require('mongoose'); //Defines mongoose
const uri = process.env.mongoGOD;

mongoose.connect(uri, { //Haces la conexion con la url
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Conectado a MongoDB')) //Le haces un console.log para saber que se ha conectado correctamente
.catch(err => console.error(err))

const presencias = [`Estamos en mantenimiento`];
	 
 //presencias


setInterval(() => {
function presence() {
client.user.setPresence({
status: 'online',
activities: [
	{
name: presencias[Math.floor(Math.random() * presencias.length)],
type: 'PLAYING'
	}
],
})
}
presence()
}, 15000);
console.log('Todo piola')
console.log("Estoy listo")

const fecha = new Date("May 31, 2021");


}




  
