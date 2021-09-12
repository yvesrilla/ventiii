const {readdirSync} = require(`fs`)
const {Collection} = require(`discord.js`)
const client = require(`../class/client.js`)

const slashFiles = readdirSync(`./slash/`).filter(f=>f.endsWith(`.js`))

client.slash = new Collection()

for (const file of slashFiles) {
  const cmd = require(`../slash/${file}`)
  client.slash.set(cmd.data.name,cmd)
}
console.log(`All slash commands are loaded!`)