const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
	name: "",
	aliases: [],
	dev: true,
	usage: "menu",
	category: "Útil",
	description: "xd",

	run: async(client, message, args) => {
const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

			const ñ = new MessageEmbed()
			.setTitle("a")

						const a = new MessageEmbed()
			.setTitle("a")

			message.reply({ content: "XD", embeds: [ñ, a], components: [row] })
	}
}