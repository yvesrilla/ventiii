const ms = require(`ms`)
module.exports = {
  type: "msg",
  run:async(client,msg)=>{
    const prefix = "v."
    if (msg.author.bot||!msg.guild?.available||!msg.content.startsWith(prefix)) return
    const args = msg.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
    const command = client.cmds.get(cmd) || client.cmds.find(c=>c.alias&&c.alias.includes(cmd))
    if (!command) return
    if (command.cd) {
      const model = client.models.get("cmdCd.js")
      const data = await model.findOne({userId:msg.author.id,cmd:command.name,cmdType:"text"})
      if (data) {
        if (data.endsAt>Date.now()) {
          return msg.reply(`Please wait \`${ms(data.endsAt-Date.now(),{long:true})}\` to run this command again!`)
        } else {
          await model.findOneAndUpdate({
            userId: msg.author.id,
            cmd: command.name,
            cmdType: "text"
          },{
            endsAt: Date.now()+command.cd
          })
        }
      } else {
        const newD = await model.create({
          userId: msg.author.id,
          cmd: command.name,
          cmdType: "text",
          endsAt: Date.now()+command.cd
        })
        newD.save()
      }
    }
    try {
      await command.run(msg,args,client)
    } catch(e) {
      msg.reply(`Error lul`)
      console.log(e)
    }
  }
}