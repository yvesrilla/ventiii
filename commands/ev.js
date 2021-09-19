module.exports = {
  name: "ev",
  run:async(msg,args,client)=>{
    if (!client.owners.has(msg.author.id)) return msg.reply("no lul")
    const code = args.join(" ") || "return \"DEEZ NUTS\""
    try {
      const ev = await eval(`(async () => {
        ${code}
      })()`)
      msg.reply(`\`\`\`js\n${ev}\n\`\`\``)
    } catch(e) {
      console.log(e)
      msg.reply(`\`\`\`js\n${e}\n\`\`\``)
    }
  }
}