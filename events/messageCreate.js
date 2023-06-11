const { Message } = require('discord.js');

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @returns 
 */
module.exports = (client, message) => {
    let content = message.content.trim();
    if (message.author.bot) return;
    const prefix = process.env.PREFIX;
    if (!prefix) return console.log('Không tìm thấy prefix!');
    
    if (!message.content.startsWith(prefix)) {
        if (content === `<@!${client.user.id}>` || content === `<@${client.user.id}>`) {
            message.reply(`Prefix của bot là \`${prefix}\``);
        }
        return;
    };


    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
}