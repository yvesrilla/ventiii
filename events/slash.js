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