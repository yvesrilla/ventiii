const ms = require(`ms`)
module.exports = {
  type: "interaction",
  run:async(client,i)=>{
    /*
    * client = The Discord bot
    * i = The slash command interaction
    */
    if (!i.isCommand()) return
    if (!i.inGuild()) return i.reply({
      content: `Sorry you must run slash commands in a guild(server)`,
      ephemeral: true
    })
    const cmd = client.slash.get(i.commandName)
    if (!cmd) return i.reply({
      content: `Weird.. I cannot excute the slash command`
    })
    if (cmd.cd) {
      const model = client.models.get("cmdCd.js")
      const data = await model.findOne({userId:i.user.id,cmd:cmd.data.name,cmdType:"slash"})   
      if (data) {
        if (data.endsAt>Date.now()) {
          return i.reply({
            content: `Please wait \`${ms(data.endsAt-Date.now(),{long:true})}\` to run this command again!`,
            ephemeral: true
          })
        } else {
          await model.findOneAndUpdate({
            userId: i.user.id,
            cmd: cmd.data.name,
            cmdType: "slash"
          },{
            endsAt: Date.now()+cmd.cd
          })
        }
      } else {
        const newD = await model.create({
          userId: i.user.id,
          cmd: cmd.data.name,
          cmdType: "slash",
          endsAt: Date.now()+cmd.cd
        })
        newD.save()
      }
    }
    try {
      await cmd.run(client,i)
    } catch(e) {
      i.reply({
        content: `There was an error executing the command`,
        ephemeral: true
      })
    }
  }
}