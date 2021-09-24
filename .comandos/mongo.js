const mongoose = require('mongoose')


const MongoPath =
'mongodb+srv://Galatrex:ScrtRvlz97_@cluster0.sikys.mongodb.net/ggez?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}