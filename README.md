# Bard Discord

### ✏️ Introduction

The BardAI Discord Bot is a powerful chatbot built using the BardAI technology developed by Google. This bot utilizes natural language processing and machine learning algorithms to provide intelligent and human-like conversations within your Discord server. With BardAI, you can have engaging and interactive conversations with the bot, making it a valuable addition to your Discord community.

### 🔧 Setup

1. Clone the repository

```bash
git clone https://github.com/Herta-Chan/BardDiscord
```

2. Install dependencies

```bash
npm install
```
or using Yarn:

```
yarn install
```

3. Create a `.env` file in the root directory of the project and fill it with the following:

```env
TOKEN=your_discord_bot_token
PREFIX=your_bot_prefix
COOKIE=your_cookie
```

+ `TOKEN` is your Discord bot token. You can get it from [here](https://discord.com/developers/applications).
+ `PREFIX` is the prefix you want to use for your bot.
+ `COOKIE` is the cookie you get from [this](https://bard.google.com/) link. 
- Next, press F12 or Ctrl + Shift + I, go to the `Application > Cookie > __Secure-1PSID` to get the cookie

4. Run the bot

```bash
npm run start
```

or using Yarn:

```bash
yarn start
```
### 🔧 PM2 Setup
```bash
npm i pm2 (For NPM)
yarn add pm2 (For YARN)
```
```bash
npm run start:pm2 (For NPM)
yarn start:pm2 (For YARN)
```

### 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### ✅️ Support

Join [Folody](https://discord.gg/wUvuUQnsaU) if you need support
