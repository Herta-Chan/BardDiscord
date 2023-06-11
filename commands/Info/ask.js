// Import Package
const { MessageAttachment, EmbedBuilder } = require('discord.js');
require('dotenv');
let BardBot;

function getBard() {
    return new Promise(async (r) => {
        const { Bard } = await import('googlebard');
        return r(
            new Bard(`__Secure-1PSID=${process.env.COOKIE}`, {
                protocol: 'https',
            }),
        );
    });
}

// Bard Function
async function send(message, result) {
    function reply(content) {
        message.reply(content);
    }
    const embeds = [];
    let tryCount = 3;
    while (result.length > 0 && tryCount > 0) {
        try {
            let end = Math.min(5000, result.length);
            embeds.push(
                new EmbedBuilder()
                .setDescription(`${result.slice(0, end)}`),
            );
            result = result.slice(end, result.length);
        } catch (e) {
            tryCount--;
            console.log(e);
        }
    }
    if (embeds.length > 8) {
        reply({
            files: [
                new MessageAttachment(
                    Buffer.from(result, 'utf-8'),
                    'message.txt',
                ),
            ],
        });
    } else {
        reply({ embeds });
    }
}
// Command
module.exports = {
    name: 'ask',
    category: 'Info',
    description: 'Hỏi đáp với Bard (Google)',
    aliases: ['bard'],
    usage: '<PREFIX>ask [message]',
    run: async (client, message, args) => {
        if (!BardBot) BardBot = await getBard();
        const content = message.content.slice(5);
        if (!content) return message.reply('Không có câu hỏi');
        try {
            const result = await BardBot.ask(content);
            return send(message, result);
        } catch (e) {
            console.log(e);
        }
    },
};