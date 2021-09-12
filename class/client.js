const {Client,Intents} = require(`discord.js`)
const config = {
  intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]
}
const client = new Client({
  intents: config.intents
})
client.login(process.env.TOKEN)
//So any file can access client through (./class/client.js)
module.exports = client