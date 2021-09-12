const {readdirSync} = require(`fs`)
const {Collection} = require(`discord.js`)
const client = require(`../class/client.js`)
const eventFiles = readdirSync(`./events/`).filter(f=>f.endsWith(`.js`))

client.events = new Collection()

for (const file of eventFiles) {
  client.events.set(file,require(`../events/${file}`))
}

client.on("messageCreate",msg=>{
  client.events.filter(e=>e.type==="msg").each(async (e)=>{
    try {
      await e.run(client,msg)
    } catch(err) {
      console.log(err)
    }
  })
})

client.on("interactionCreate",i=>{
  client.events.filter(e=>e.type==="interaction").each(async (e)=>{
    try {
      await e.run(client,i)
    } catch(err) {
      console.log(err)
    }
  })
})

console.log(`All events are loaded!`)