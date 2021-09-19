const client = require(`../class/client.js`)
const mongwoose = require(`mongoose`)
const {Collection} = require(`discord.js`)
const {readdirSync} = require(`fs`)

const modelFiles = readdirSync(`./models/`).filter(f=>f.endsWith(`.js`))

client.models = new Collection()
mongwoose.connect(process.env.GOOSEKEY, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then(()=>{
  console.log(`Connected to MongoDB`)
  if (!modelFiles.length) return
  for (const file of modelFiles) {
    const model = require(`../models/${file}`)
    client.models.set(file,model)
  }
  console.log(`Loaded ${client.models.size} model files into \`client.models\`!`)
})

