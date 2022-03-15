const {Schema, Types, model} = require('mongoose')

const GroupSchema = new Schema({
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    translations: { type: Array, required: false },
    options: { type: Array, required: false },
    deleted: { type: Boolean, required: true },
    visible: { type: Boolean, required: true },
    products: { type: Array, required: false }
})

module.exports = model('Group', GroupSchema)