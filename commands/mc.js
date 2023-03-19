const { SlashCommandBuilder, Attachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mc')
		.setDescription('Vypíše IP adresu Minecraft serveru'),
	async execute(interaction) {
		await interaction.reply('Minecraft server IP: mc.jarek.tk');
	},
};
