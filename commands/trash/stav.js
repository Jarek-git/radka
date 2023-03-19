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
            interaction.reply(`Server je online, hraje na něm ${json.players.now} hráčů.`);
            if(json.players.now>0){ //todo
                interaction.reply(`${json.players.sample}`);
            }
        }
        else {
            return interaction.reply(`Server je vypnutý.`);
        }
            
      });
	},
};