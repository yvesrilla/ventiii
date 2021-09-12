module.exports = {
  data: {
    name: "help",
    description: "View the Bots Commands and News!!"
  },
  run:async(client,i)=>{
    const hbed = new discord.MessageEmbed()
    .setColor("#cff5c4")
    .setDescription("hi")

    i.reply({
      embeds:[hbed],
      ephemeral: false
    })
  }
}