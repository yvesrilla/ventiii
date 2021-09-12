module.exports = {
  data: {
    name: "ping",
    description: "This shows the bot's stats"
  },
  run:async(client,i)=>{
    i.reply({
      content: `**Ping:** ${client.ws.ping}ms \n **API Ping:** ${Math.round(client.ws.ping)}ms`
    })
  }
}