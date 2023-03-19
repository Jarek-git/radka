const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mc-stav')
		.setDescription('Vypíše IP adresu Minecraft serveru'),
	async execute(interaction) {
		await fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
        method: 'GET'
      })
      .then(function(response) { return response.json(); })
      .then(function(json) {
        if(json.status=='success'){
            // Get the players online
            const players = json.players;
            // Get the sample property, which contains the players online
            const playersOnline = players.sample;

            // Check if there are players online
            if (playersOnline.length > 0) {
                // Create a message with the names of the players online
                let message = 'Server je aktivní, hrají na něm: \n';
                playersOnline.forEach((player) => {
                    message += `- ${player.name}\n`;
                });

                // Reply with the message
                return interaction.reply(message);
            } else {
                // If there are no players online, reply with a message
                return interaction.reply('Server je aktivní, nikdo na něm nehraje.');
            }
        }
        else {
            return interaction.reply(`Server je vypnutý.`);
        }
            
      });
	},
};