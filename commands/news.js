module.exports = {
  name:"news",
  run:async(msg, args, client)=>{
    const newstitle = new client.discord.MessageEmbed()
    .setDescription("**Bot News!!**")

    const viewnews1 = new client.discord.MessageEmbed()
    .setDescription("**Thank You So Much for Venti Reaching `500` Servers!!**"
    +"\n"
    +"\n Wow I cannot believe it! Thank you so much for supporting us through these times and for Venti reaching 500 servers!!"
    +"\n We highly Appreciate it!"
    )

    const viewnews2 = new client.discord.MessageEmbed()
    .setDescription("**New Version Released**!!"
    +"\n __**Version 1.5 Update Notes**__"
    +"\n Introducing Version `1.5`!"
    +"\n We have worked days and nights for this new release of Venti!"
    +"\n Look below for all of the things we added in the new update!"
    +"\n"
    +"\n **Things Added**"
    +"\n ```\n  NEW Economy Sytem (Get Amenoculus by voting!!) \n \n  Character Builds are now Complete! \n \n  You can now view information about Artifact Sets and \n  Weapons```"
    )

    msg.reply({embeds:[newstitle, viewnews1, viewnews2]})
  }
}