const {Schema, Types, model} = require('mongoose')

const KeyCategorySchema = new Schema({
    value: { type: Types.ObjectId},
    title: { type: String, required: true },
    description: { type: String, required: true },
    translations: { type: Array, required: false }
})

module.exports = model('KeyCategory', KeyCategorySchema)