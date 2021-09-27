const client = require(`./class/client.js`)
const activity = "/h for help! | ventibot.com"

client.on("ready",async ()=>{
  console.clear()
  console.log(`Logged in as ${client.user.tag}!`)
  await client.application.fetch()
  client.owners = client.application.owner?.members //['717422301192126485', '764727536507813898']
  client.discord = require(`discord.js`) 
  client.user.setPresence({
    status: "dnd",
    activities: [{
      name: activity,
      type: "PLAYING"
    }]
  })
  require(`./load/events.js`)
  require(`./load/slash.js`)
  require(`./load/cmd.js`)
  require(`./load/mongoose.js`)
})