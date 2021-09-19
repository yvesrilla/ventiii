const {Schema,model} = require(`mongoose`)

const schema = new Schema({
  userId: {type:String,required:true},
  cmd: {type:String,required:true},
  cmdType: {type:String,required:true},
  endsAt: {type:Number,required:true}
})

module.exports = model(`cmd_cd`,schema)