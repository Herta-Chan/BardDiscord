module.exports = (client, message) => {
	client.snipe.set(message.channel.id, message);
};
