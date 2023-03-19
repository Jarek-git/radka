const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kocke')
		.setDescription('Čiči.'),

        async execute(interaction) {
        await fetch('https://api.thecatapi.com/v1/images/search', { 
        method: 'GET'
        })
        .then(function(response) { return response.json(); })
        .then(function(json) {
              const imageUrl = json[0].url;
              // Use the interaction object to send a message to the Discord channel with the image URL
              return interaction.reply(imageUrl);
          });
        }
};
//! 

//todo

//? 


