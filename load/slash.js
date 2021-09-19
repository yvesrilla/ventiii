const {readdirSync} = require(`fs`)
const {Collection} = require(`discord.js`)
const client = require(`../class/client.js`)

const slashFiles = readdirSync(`./slash/`).filter(f=>f.endsWith(`.js`))

client.slash = new Collection()

for (const file of slashFiles) {
  const cmd = require(`../slash/${file}`)
  client.slash.set(cmd.data.name,cmd)
}
console.log(`Loaded ${client.slash.size} slash command files in \`client.slash\`!`)