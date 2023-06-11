// Command
module.exports = {
    name: 'ping', 
    category: 'Info',
    aliases: ['p'],
    description: 'Kiểm tra độ trễ của bot',
    usage: '<PREFIX>ping',
    run: (client, message, args) => {
        message.reply(`🏓 Pong! \`${client.ws.ping}ms\``);
    }
}