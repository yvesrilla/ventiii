module.exports = {
  name: "load_slash",
  cd: 1000*10,
  run:async(msg,args,client)=>{
    const guild = await msg.guild.commands.fetch()
    //if (!client.owners.has?.(msg.author.id)||client.owners!==msg.author.id||mgs.author.id!=="764727536507813898") return msg.reply(`only the owner can run this cmd`)
    const fileName = args[0]
    let file
    try {
      file=require(`../slash/${fileName}`)
    } catch(e) {
      msg.reply(`No such file called ${fileName}`)
    }
    if (!file) return
    const cmd = msg.guild.commands.cache.find(c=>c.name===file.data.name)
    if (cmd) {
      //we wanna edit
      msg.guild.commands.edit(cmd,file.data)
      msg.reply(`edited slash cmd`)
    } else {
      msg.guild.commands.create(file.data)
      msg.reply(`created slash cmd`)
    }
  }
}