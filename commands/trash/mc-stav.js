fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
        method: 'GET'
      })
      .then(function(response) { return response.json(); })
      .then(function(json) {
        console.log(json)
        console.log(typeof(json.status))
            // interaction.guild is the object representing the Guild in which the command was run
            //return interaction.reply(`Server je ${json.status}.`);
            //return interaction.reply("s")
      });




/*
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mc-stav')
		.setDescription('info o mc serveru.'),
    async execute(interaction) {
     
    await fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
        method: 'GET'
      })
      .then(function(response) { return response.json(); })
      .then(function(json) {
        //console.log(json)
            // interaction.guild is the object representing the Guild in which the command was run
            return interaction.reply(`Server je ${json.status}.`);
            //return interaction.reply("s")
      });
      //await interaction.reply("s");
		
	},
};
*/
/*
fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
    method: 'GET'
  })
  .then(function(response) { return response.json(); })
  .then(function(json) {
    console.log(json)
        // interaction.guild is the object representing the Guild in which the command was run
        //interaction.reply(`Server je ${json.status}.`);
        //return interaction.reply("s")
  });

// Asynchronní call na API
async function callAPI(apiURL){
    // Získá JS Objekt Response
    let response = await fetch(`${apiURL}`)
    // Z response vytáhne obsah body ve formátu JSON -> Promise
    let data = await response.json()
    // vrátí data
    return data
}
callAPI("https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565").then(pripravBody, errorHandler)

function pripravBody(apiData){
    //console.log(apiData)
    let poleHracu = apiData.players.sample
    //console.log(poleHracu)
    const { SlashCommandBuilder } = require('discord.js');

    module.exports = {
	data: new SlashCommandBuilder()
		.setName('mc-stav')
		.setDescription('info o mc serveru.'),
	zasync execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`Server je ${json.status}.`);
		
	},
};
}
// Error handler, kdyby se nezdařil fetch(API)
function errorHandler(err){
    // Oznámí error uživateli
    //alert(Chyba: \n`${err}`)
}
console.log(data)
 





fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
    return json
});


async function callAPI(apiURL){
    // Získá JS Objekt Response
    let response = await fetch(`${apiURL}`)
    // Z response vytáhne obsah body ve formátu JSON -> Promise
    let data = await response.json()
    // vrátí data
    return data
}
let vs = callAPI('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565')
console.log(vs)


        fetch('https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565', { 
        method: 'GET'
        })
        .then(function(response) {
        return response.json()
        }).then(function(json) {
        //console.log('parsed json', json)
        }).catch(function(ex) {
        //console.log('parsing failed', ex)
        })
        console.log(data)
        


        async function callAPI(apiURL){
            // Získá JS Objekt Response
            let response = await fetch(`${apiURL}`)
            // Z response vytáhne obsah body ve formátu JSON -> Promise
            let data = await response.json()
            // vrátí data
            return data
        }

        let json = callAPI("https://mcapi.us/server/status?ip=mc.jarek.tk&port=25565")
        console.log(json)
        

*/