module.exports = (client) => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'Copyright © 2023 -_ItzDenki#6130'}], status: 'idle'} );
}