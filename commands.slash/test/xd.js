const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "Avatar",
    type: "USER",
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

	let member = await client.users.fetch(interaction.targetId);

		const embed = new MessageEmbed()
			.setDescription(`Avatar de: __**${member.username}**__`)
			.addField('Pedido por:', `${interaction.member}`)
			.setImage(member.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))	
			.setColor('WHITE')
			.setFooter(':)', client.user.displayAvatarURL())
			.setTimestamp();

        interaction.followUp({ embeds: [embed]});
    },
};