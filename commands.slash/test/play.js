const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "play",
    description: "Reproduce una canción",
    options: [
			{
				name: 'song',
				description: 'Canción a reproducir',
				type: 'STRING',
				required: true
			},
		],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

    if(!interaction.member.voice.channel) return interaction.followUp("Debes estar en un canal de voz...")

    if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.followUp("Debes estar en el mismo canal de voz que yo, de lo contrario no funcionará correctamente...")
			
			let voice = interaction.member.voice.channel
			const song = interaction.options.getString("song")
			let member = interaction.member
			let channel = interaction.channel


			interaction.followUp("Buscando...")
			client.distube.playVoiceChannel(voice, song, {
				member: member,
				textChannel: channel,
				
			})
    },
};