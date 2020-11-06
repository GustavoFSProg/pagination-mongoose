import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
  },
  price: Number,
  description: String,
})

export default model('productModel', schema)
