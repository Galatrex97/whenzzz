const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "nya",
    description: "returns websocket ping",
    options: [
			{
				name: 'message',
				description: 'ñ',
				type: 'STRING',
				required: false
			},
		],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!`, ephemeral: true });
    },
};