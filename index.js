const client = require(`./class/client.js`)
const activity = "/h for help! | ventibot.com"


client.on("ready",async ()=>{
  console.clear()
  await client.application.fetch()
  client.owners = ['717422301192126485', '764727536507813898']
  require(`./load/events.js`)
  require(`./load/slash.js`)
  require(`./load/cmd.js`)
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity(activity)
  console.log(`loaded ${client.user.tag}'s activity to ${activity}`)
  console.log(`owners are ${client.owners}!`)

})

//mongoose setup uwu
const mongwoose = require('mongoose')
mongwoose.connect(process.env.GOOSEKEY, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('connected to mongo uwu!'))

