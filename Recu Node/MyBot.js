const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Espero que te guste');
});

client.on('message', msg => {
  if (msg.content === '!ascii "DEMO!"') {
	  
   ascii.font('DEMO!', 'doom', function(rendered){
		msg.channel.send(rendered);
	});
	console.log('Introducido el comando correcto!');
  }
});

client.login('NDQ4NDM1ODQyNjU5MTIzMjEx.DeWMOQ.29xxBmjHirI6F-rsMmdrJKRnlRI');