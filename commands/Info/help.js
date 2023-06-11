// Import Package 
const { EmbedBuilder } = require('discord.js');
// Command
module.exports = {
	name: 'help',
	category: 'User',
	description: 'Xem tất cả các lệnh hoặc xem thông tin của một lệnh',
	usage: '<PREFIX>help [command]',
	run: (client, message, args) => {
		if (!args[0]) {
			return getAll(client, message);
		} else {
			return getCMD(client, message, args[0]);
		}
	},
};
// Get Command Function
function getAll(client, message) {
	const embed = new EmbedBuilder()
		.setThumbnail(client.user.displayAvatarURL())
		.setAuthor({
			name: `Thông tin chi tiết lệnh ? Sử dụng ${process.env.PREFIX}help [command]`,
			iconURL: message.guild?.iconURL({ dynamic: true }),
		})
		.setFooter({
			text: `Requested by ${message.author.tag}`,
			iconURL: message.author.displayAvatarURL({ dynamic: true }),
		});
	const command = (category) => {
		return client.commands
			.filter((cmd) => cmd.category === category)
			.map((cmd) => `\`${cmd.name}\``)
			.join(', ');
	};

	const info = client.categories
		.map(
			(cat) =>
				`**${
					cat[0].toUpperCase() + cat.slice(1)
				}** \n${command(cat)}`,
		)
		.reduce((string, category) => string + '\n' + category);

	embed.setDescription(info);

	return message.reply({
        embeds: [embed],
    });
}
// Detail Command Function
function getCMD(client, message, input) {
	const embed = new EmbedBuilder();
	input = input.toLowerCase();
	const cmd =
		client.commands.get(input) ||
		client.commands.get(client.aliases.get(input));
	if (!cmd) {
		embed.setDescription(`Không có câu lệnh **${input.toLowerCase()}**`);
		return message.channel.send({
			embeds: [embed],
		});
	}
    embed.addFields({
        name: 'Tên lệnh',
        value: cmd.name,
        inline: true,
    }, {
        name: 'Thư mục',
        value: cmd.category,
        inline: true,
    }, {
        name: 'Aliases',
        value: cmd.aliases?.length ? cmd.aliases.map((alias) => `\`${alias}\``).join(', ') : 'Không có',
        inline: false,
    }, {
        name: 'Mô tả',
        value: cmd.description || '\u200b',
        inline: false,
    }, {
        name: 'Cách dùng',
        value: cmd.usage?.replace(/<PREFIX>/gim, process.env.PREFIX) || `${process.env.PREFIX}${cmd.name}`,
        inline: false,
    });
    embed.setFooter({
        text: `Kí hiệu: <> = bắt buộc, [] = Tùy chọn`,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
    });
	return message.channel.send({
        embeds: [embed],
    });
}
