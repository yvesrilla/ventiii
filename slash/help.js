const {MessageActionRow, MessageButton} = require('discord.js')

module.exports = {
  data: {
    name: "help",
    description: "View the Bots Commands and News!!"
  },
  run:async(client,i)=>{
    const hbed = new client.discord.MessageEmbed()
    .setColor("#cff5c4")
    .setThumbnail("https://i.postimg.cc/2S50SjLP/image.png")
    .setDescription("Welcome to my Help Embed!! Here you can see all of the available commands to use with me!!")
    .addFields(
      {name:"Basic Commands", value:"`/help` `/support` `/premium` `/about` `/stats` `/vote`"},
      {name:"Economy Commands", value:"`/balance` `/work` `/gib` `/modify`"},
      {name:"Amenoculus Commands", value:"`/whatisthis` `/shop` `/buy` `blessing` `/blessarchons`"}
    )

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('viewNews')
					.setLabel("Bot's News")
					.setStyle('SUCCESS'),
		);




    i.reply({
      embeds:[hbed],
      components:[row]
    })

  }
}