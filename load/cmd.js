const {readdirSync} = require(`fs`)
const {Collection} = require(`discord.js`)
const client = require(`../class/client.js`)
const cmds = readdirSync(`./commands/`).filter(f=>f.endsWith(`.js`))

client.cmds = new Collection()

for (const file of cmds) {
  const cmd = require(`../commands/${file}`)
  client.cmds.set(cmd.name,cmd)
}

console.log(`Loaded ${client.cmds.size} command files in \`client.cmds\`!`)