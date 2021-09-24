const { youtubeChannelInfo } = require("zjuqn");
const Discord = require("discord.js");

module.exports = {
	name: "ytchannel",
	aliases: ["ytchan"],
	dev: true,
	category: "Info",
	description: "Busca un canal de YouTube y te muestra sus estadísticas",
	usage: "ytchannel <canal>",

	run: async(client, message, args) => {
		let canalName = args.join(" ");

if(!canalName) {
	return message.reply("Por favor, escribe un canal.")
}

let ñ = new youtubeChannelInfo({
	message: message,
	color: "WHITE",
	channelName: canalName
})

ñ.send()

	}
}