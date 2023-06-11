const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');


['command', 'event'].forEach((handler) =>
	require(`./handlers/${handler}`)(client),
);

client.login(process.env.TOKEN);



process.on('unhandledRejection', (err) => {
    console.log(err);
});

process.on('uncaughtException', (err) => {
    console.log(err);
});
