module.exports = {
  type: "msg",
  run:async(client,msg)=>{
    const prefix = "v."
    if (msg.author.bot||!msg.guild?.available||!msg.content.startsWith(prefix)) return
    const args = msg.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
    const command = client.cmds.get(cmd) || client.cmds.find(c=>c.alias&&c.alias.includes(cmd))
    try {
      await command.run(msg,args,client)
    } catch(e) {
      msg.reply(`Error lul`)
      console.log(e)
    }
  }
}